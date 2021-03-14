import { Connection } from "typeorm";
import Endereco from "../../entities/Endereco";
import Medico from "../../entities/Medico";
import IMedicoRepository from "../IMedicoRepository";

export default class MySqlMedicoRepository implements IMedicoRepository{
    constructor(
        private connection: Connection
    ){}

    async find(searchValue: string): Promise<Medico[]> {
        const query =  this.connection.createQueryRunner()
        await query.connect()

        try {
            return await query.manager
                .createQueryBuilder(Medico, 'medico')
                .leftJoinAndSelect('medico.endereco', 'endereco')
                .where('medico.crm like :crm', { crm: `%${searchValue}%` })
                .orWhere('medico.nome like :nome', { nome: `%${searchValue}%`})
                .orWhere('medico.telefoneFixo like :telefoneFixo', { telefoneFixo: `%${searchValue}%`})
                .orWhere('medico.telefoneCelular like :telefoneCelular', { telefoneCelular: `%${searchValue}%` })
                .orWhere('medico.especialidadeMedica like :especialidadeMedica', { especialidadeMedica: `%${searchValue}%` })
                .orWhere('endereco.cep like :cep', { cep: `%${searchValue}%` })
                .orWhere('endereco.logradouro like :logradouro', { logradouro: `%${searchValue}%` })
                .orWhere('endereco.complemento like :complemento', { complemento: `%${searchValue}%` })
                .orWhere('endereco.bairro like :bairro', { bairro: `%${searchValue}%` })
                .orWhere('endereco.uf like :uf', { uf: `%${searchValue}%` })
                .orWhere('endereco.cidade like :cidade', { cidade: `%${searchValue}%` })
                .getMany()
        } catch (err) {
            throw err
        } 
    }
    
    async save(medico: Medico): Promise<void> {
        const query =  this.connection.createQueryRunner()
        await query.connect()
        await query.startTransaction()
        try {
            await query.manager.save(Endereco, medico.endereco)
            await query.manager.save(Medico, medico)
            await query.commitTransaction()
        } catch (err) {
            await query.rollbackTransaction()
            throw err
        } finally {
            query.release()
        }
    }

    async update(medico: Medico): Promise<void> {
        const query =  this.connection.createQueryRunner()
        await query.connect()
        await query.startTransaction()

        try {
            let medicoSalvo = await query.manager.findOne(Medico, {
                join: {
                    alias: "medico",
                    leftJoinAndSelect: {
                        endereco: "medico.endereco"
                    }
                },
                where: {
                    crm: medico.crm
                }
            })
            
            medicoSalvo.crm = medico.crm
            medicoSalvo.especialidadeMedica = medico.especialidadeMedica
            medicoSalvo.nome = medico.nome
            medicoSalvo.telefoneCelular = medico.telefoneCelular
            medicoSalvo.telefoneFixo = medico.telefoneFixo
            medicoSalvo.endereco.bairro = medico.endereco.bairro
            medicoSalvo.endereco.cep = medico.endereco.cep
            medicoSalvo.endereco.cidade = medico.endereco.cidade
            medicoSalvo.endereco.complemento = medico.endereco.complemento
            medicoSalvo.endereco.logradouro = medico.endereco.logradouro
            medicoSalvo.endereco.uf = medico.endereco.uf

            await query.manager.save(Medico, medicoSalvo)
            await query.commitTransaction()
        } catch (err) {
            await query.rollbackTransaction()
            throw err
        }finally {
            query.release()
        }
    }

    async findByCrm(crm: string): Promise<Medico> {
        const query =  this.connection.createQueryRunner()
        await query.connect()

        try {
            return await query.manager.findOne(Medico, {
                join: {
                    alias: 'medico',
                    leftJoinAndSelect: {
                        endereco: 'medico.endereco'
                    }
                }, 
                where: { 
                    crm
                }
            })
        } catch (err) {
            throw err
        }
    }

    async softDelete(id: number): Promise<void> {
        const query =  this.connection.createQueryRunner()
        await query.connect()
        await query.startTransaction()

        try {
            await query.manager.softDelete(Medico, id)
            await query.commitTransaction()
        } catch (err) { 
            await query.rollbackTransaction()
            throw err
        } finally {
            query.release()
        }
    }

}
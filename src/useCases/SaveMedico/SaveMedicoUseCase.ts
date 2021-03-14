import Endereco from "../../entities/Endereco";
import Medico from "../../entities/Medico";
import ICorreiosProvider from "../../providers/ICorreiosProvider";
import IMedicoRepository from "../../repositories/IMedicoRepository";
import ISaveMedicoRequestDTO from "./ISaveMedicoRequestDTO";

export default class SaveMedicoUseCase {

    constructor(
        private medicoRepository: IMedicoRepository,
        private correiosProvider: ICorreiosProvider
    ){}

    async execute(data: ISaveMedicoRequestDTO){
        const medicoAlreadyExist =  await this.medicoRepository.findByCrm(data.crm)
        if(medicoAlreadyExist){
            throw new Error('Médico já cadastrado.')
        }

        let endereco: Endereco

        
        endereco = await this.correiosProvider.getAddressByCep(data.cep)
        
        if(!endereco){
            throw new Error('Cep inválido.')
        }

        if(data.complemento){
            endereco.complemento = data.complemento
        }
        
        const medico = new Medico()
        medico.crm = data.crm
        medico.endereco = endereco
        medico.especialidadeMedica = data.especialidadeMedica
        medico.nome = data.nome
        medico.telefoneCelular = data.telefoneCelular
        medico.telefoneFixo = data.telefoneFixo
        
        try {
            await this.medicoRepository.save(medico)
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
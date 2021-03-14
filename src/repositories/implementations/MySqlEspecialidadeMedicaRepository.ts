import { Connection } from "typeorm";
import EspecialidadeMedica from "../../entities/EspecialidadeMedica";
import IListEspecialidadeMedicaRepository from "../IListEspecialidadeMedicaRepository";

export default class MySqlEspecialidadeMedicaRepository implements IListEspecialidadeMedicaRepository{
    constructor(private connection: Connection){}

    async list(): Promise<EspecialidadeMedica[]> {
        const query =  this.connection.createQueryRunner()
        await query.connect()

        try {
            return query.manager.find(EspecialidadeMedica)
        } catch (err) {
            throw err
        }
    }
}
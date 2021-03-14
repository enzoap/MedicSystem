import IListEspecialidadeMedicaRepository from "../../repositories/IListEspecialidadeMedicaRepository";

export default class ListEspecialidadeMedicaUseCase {
    constructor(private listaEspecialidadeRepository: IListEspecialidadeMedicaRepository){}

    async execute(){
        try {
            return await this.listaEspecialidadeRepository.list()
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
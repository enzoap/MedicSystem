import IMedicoRepository from "../../repositories/IMedicoRepository";
import IFindMedicoRequestDTO from "./IFindMedicoRequestDTO";

export default class FindMedicoUseCase {
    constructor(private medicoRepository: IMedicoRepository) {}

    async execute(data: IFindMedicoRequestDTO){
        try {
            const medicos =  await this.medicoRepository.find(data.searchValue)

            if(!medicos){
                throw new Error('Nenhum médico encontrado.')
            }
            return medicos
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
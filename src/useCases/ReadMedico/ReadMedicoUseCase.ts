import IMedicoRepository from "../../repositories/IMedicoRepository";
import IReadMedicoRequestDTO from "./IReadMedicoRequestDTO";

export default class ReadMedicoUseCase {
    constructor(
        private medicoRepository: IMedicoRepository
    ){}

    async execute(data: IReadMedicoRequestDTO){
        try {
            return await this.medicoRepository.findByCrm(data.crm)
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
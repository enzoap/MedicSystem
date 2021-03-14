import IMedicoRepository from "../../repositories/IMedicoRepository";
import ISoftDeleteRequestDTO from "./ISoftDeleteRequestDTO";

export default class SoftDeleteMedicoUseCase {
    constructor(private medicoRepository: IMedicoRepository) {}

    async execute(data: ISoftDeleteRequestDTO){
        try {
            await this.medicoRepository.softDelete(data.id)
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
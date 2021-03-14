import Medico from "../../entities/Medico";
import IMedicoRepository from "../../repositories/IMedicoRepository";
import IUpdateMedicoRequestDTO from "./IUpdateMedicoRequestDTO";

export default class UpdateMedicoUseCase {
    constructor(
        private medicoRepository: IMedicoRepository
    ){}

    async execute(data: IUpdateMedicoRequestDTO){
        const medico = new Medico()
        Object.assign(medico, data)

        try {
        await this.medicoRepository.update(medico)
        } catch (err) {
            throw new Error(err.message)
        }
    }
}
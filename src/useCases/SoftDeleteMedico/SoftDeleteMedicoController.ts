import { Request, Response } from "express";
import IMedicoRepository from "../../repositories/IMedicoRepository";
import ISoftDeleteRequestDTO from "./ISoftDeleteRequestDTO";
import SoftDeleteMedicoUseCase from "./SoftDeleteMedicoUseCase";

export default class SoftDeleteMedicoController {
    constructor(private softDeleteMedicoUseCase: SoftDeleteMedicoUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params

        try {
            await this.softDeleteMedicoUseCase.execute({
                id: Number(id)
            })
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send({
                message: err.message
            })
        }
    }
}
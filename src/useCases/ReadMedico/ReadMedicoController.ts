import { Request, Response } from "express";
import ReadMedicoUseCase from "./ReadMedicoUseCase";

export default class ReadMedicoController {
    constructor(
        private readMedicoUseCase: ReadMedicoUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { crm } = request.params

        try {
            const medico = await this.readMedicoUseCase.execute({
                crm
            })
            return response.status(200).send(medico)
        } catch (err) {
            return response.status(400).send({
                message: err.message ?? "Erro inesperado."
            })
        }
    }
}
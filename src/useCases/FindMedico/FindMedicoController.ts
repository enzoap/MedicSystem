import { Request, Response } from "express";
import FindMedicoUseCase from "./FindMedicoUseCase";

export default class FindMedicoController {
    constructor(private findMedicoUseCase: FindMedicoUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { searchValue } = request.query
        
        try {
            const medicos = await this.findMedicoUseCase.execute({
                searchValue: String(searchValue)
            })
            return response.status(200).send({
                medicos: medicos
            })
        } catch (err) {
            return response.status(400).send({
                message: err.message ?? 'Erro inesperado.'
            })
        }
    }
}
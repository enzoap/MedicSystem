import { Request, Response } from "express";
import ListEspecialidadeMedicaUseCase from "./ListEspecialidadeMedicaUseCase";

export default class ListEspecialidadeMedicaController {
    constructor(private listaEspecialidadeMedicaUseCase: ListEspecialidadeMedicaUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const lista = await this.listaEspecialidadeMedicaUseCase.execute()
            return response.status(200).send({
                lista
            })
        } catch (err) {
            response.send(400).send({
                message: err.message ?? 'Erro inesperado.'
            })
        }
    }
}
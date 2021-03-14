import { Request, Response } from "express";
import Endereco from "../../entities/Endereco";
import EspecialidadeMedica from "../../entities/EspecialidadeMedica";
import SaveMedicoUseCase from "./SaveMedicoUseCase";

export default class SaveMedicoController {
    constructor(
        private saveMedicoUseCase: SaveMedicoUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const {nome, crm, telefoneFixo, telefoneCelular, cep, complemento, especialidadeMedica} = request.body

        try {
            await this.saveMedicoUseCase.execute({
                crm,
                cep,
                complemento,
                especialidadeMedica,
                nome,
                telefoneCelular,
                telefoneFixo
            })
            return response.status(201).send()
        } catch (err) {
            return response.status(400).send({
                message: err.message ?? 'Erro inesperado.'
            })
        }

    }
}
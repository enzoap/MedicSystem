import { Request, Response } from "express";
import Endereco from "../../entities/Endereco";
import UpdateMedicoUseCase from "./UpdateMedicoUseCase";

export default class UpdateMedicoController {
    constructor(
        private updateMedicoUseCase: UpdateMedicoUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { nome, crm, telefoneFixo, telefoneCelular, endereco : enderecoRequest, especialidadeMedica } = request.body

        const endereco = new Endereco()
        Object.assign(endereco, enderecoRequest)

        try {
            await this.updateMedicoUseCase.execute({
                crm,
                endereco,
                especialidadeMedica,
                nome,
                telefoneCelular,
                telefoneFixo
            })
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send({
                message: err.message ?? 'Erro inesperado.'
            })
        }
    }
}
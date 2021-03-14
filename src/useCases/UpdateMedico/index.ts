import { getConnection } from "typeorm";
import MySqlMedicoRepository from "../../repositories/implementations/MySqlMedicoRepository";
import UpdateMedicoController from "./UpdateMedicoController";
import UpdateMedicoUseCase from "./UpdateMedicoUseCase";

const medicoRepository = new MySqlMedicoRepository(getConnection())

const updateMedicoUseCase =  new UpdateMedicoUseCase(medicoRepository)

const updateMedicoController = new UpdateMedicoController(updateMedicoUseCase)

export { updateMedicoController }
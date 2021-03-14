import { getConnection } from "typeorm";
import MySqlMedicoRepository from "../../repositories/implementations/MySqlMedicoRepository";
import SoftDeleteMedicoController from "./SoftDeleteMedicoController";
import SoftDeleteMedicoUseCase from "./SoftDeleteMedicoUseCase";



const medicoRepository = new MySqlMedicoRepository(getConnection())

const softDeleteMedicoUseCase = new SoftDeleteMedicoUseCase(medicoRepository)

const softDeleteController = new SoftDeleteMedicoController(softDeleteMedicoUseCase)

export { softDeleteController }
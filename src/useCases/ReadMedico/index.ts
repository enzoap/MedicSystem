import { getConnection } from "typeorm";
import MySqlMedicoRepository from "../../repositories/implementations/MySqlMedicoRepository";
import ReadMedicoController from "./ReadMedicoController";
import ReadMedicoUseCase from "./ReadMedicoUseCase";

const medicoRepository = new MySqlMedicoRepository(getConnection())

const readMedicoUseCase = new ReadMedicoUseCase(medicoRepository)

const readMedicoController = new ReadMedicoController(readMedicoUseCase)

export { readMedicoController }
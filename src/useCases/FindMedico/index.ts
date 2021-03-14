import { getConnection } from "typeorm";
import MySqlMedicoRepository from "../../repositories/implementations/MySqlMedicoRepository";
import FindMedicoController from "./FindMedicoController";
import FindMedicoUseCase from "./FindMedicoUseCase";

const medicoRepository = new MySqlMedicoRepository(getConnection())

const findMedicoUseCase = new FindMedicoUseCase(medicoRepository)

const findMedicoController = new FindMedicoController(findMedicoUseCase)

export { findMedicoController }
import { getConnection } from "typeorm";
import CorreiosProvider from "../../providers/implementations/CorreiosProvider";
import MySqlMedicoRepository from "../../repositories/implementations/MySqlMedicoRepository";
import SaveMedicoController from "./SaveMedicoController";
import SaveMedicoUseCase from "./SaveMedicoUseCase";

const correiosProvider = new CorreiosProvider()
const medicoRepository = new MySqlMedicoRepository(getConnection())

const saveMedicoUseCase = new SaveMedicoUseCase(medicoRepository, correiosProvider)

const saveMedicoController = new SaveMedicoController(saveMedicoUseCase)

export { saveMedicoController }
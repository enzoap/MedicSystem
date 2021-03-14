import { getConnection } from "typeorm";
import MySqlEspecialidadeMedicaRepository from "../../repositories/implementations/MySqlEspecialidadeMedicaRepository";
import ListEspecialidadeMedicaController from "./ListEspecialidadeMedicaController";
import ListEspecialidadeMedicaUseCase from "./ListEspecialidadeMedicaUseCase";

const listaEspecialidadeRepository = new MySqlEspecialidadeMedicaRepository(getConnection())

const listaEspecialidadeMedicaUseCase = new ListEspecialidadeMedicaUseCase(listaEspecialidadeRepository)

const listaEspecialidadeMedicaController = new ListEspecialidadeMedicaController(listaEspecialidadeMedicaUseCase)

export { listaEspecialidadeMedicaController }
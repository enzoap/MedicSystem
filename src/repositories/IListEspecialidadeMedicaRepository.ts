import EspecialidadeMedica from "../entities/EspecialidadeMedica";

export default interface IListEspecialidadeMedicaRepository {
    list(): Promise<EspecialidadeMedica[]>
}
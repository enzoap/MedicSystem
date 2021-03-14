import Medico from "../entities/Medico";

export default interface IMedicoRepository {
    save(medico: Medico): Promise<void>
    update(medico: Medico): Promise<void>
    findByCrm(crm: string): Promise<Medico | undefined>
    softDelete(id: number): Promise<void>
    find(searchValue: string): Promise<Medico[] | undefined>
}
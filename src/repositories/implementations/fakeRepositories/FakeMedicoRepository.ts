import Medico from "../../../entities/Medico";
import IMedicoRepository from "../../IMedicoRepository";

export default class FakeMedicoRepository implements IMedicoRepository {
    private medico: Medico[] = []

    save(medico: Medico): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(medico: Medico): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByCrm(crm: string): Promise<Medico> {
        throw new Error("Method not implemented.");
    }
    softDelete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(searchValue: string): Promise<Medico[]> {
        throw new Error("Method not implemented.");
    }
}
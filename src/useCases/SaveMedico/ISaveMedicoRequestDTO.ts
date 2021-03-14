import Endereco from "../../entities/Endereco";

export default interface ISaveMedicoRequestDTO {
    nome: string
    telefoneFixo: string
    telefoneCelular: string
    crm: string
    cep: string
    complemento?: string
    especialidadeMedica: string[]
}
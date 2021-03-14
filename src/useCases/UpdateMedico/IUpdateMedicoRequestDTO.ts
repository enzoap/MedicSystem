import Endereco from "../../entities/Endereco";

export default interface IUpdateMedicoRequestDTO {
    nome: string
    telefoneFixo: string
    telefoneCelular: string
    crm: string
    endereco: Endereco
    especialidadeMedica: string[]
}
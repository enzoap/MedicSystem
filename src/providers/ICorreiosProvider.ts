import Endereco from "../entities/Endereco";

export default interface ICorreiosProvider {
    getAddressByCep(cep: string): Promise<Endereco>
}
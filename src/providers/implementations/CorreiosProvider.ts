import Endereco from "../../entities/Endereco";
import ICorreiosProvider from "../ICorreiosProvider";
import soap  = require('soap')

export default class CorreiosProvider implements ICorreiosProvider {
    private soap: typeof soap

    constructor(){
        this.soap = soap
    }

    async getAddressByCep(cep: string): Promise<Endereco> {
        const urlServicesCorreios = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
        let endereco: Endereco = null

        await new Promise((resolve, reject) => {
            soap.createClient(urlServicesCorreios, async (err, client) => {
                await client.consultaCEP({cep}, (err, result) => {
                   try {
                    resolve(result)
                    if(result.statusCode === 500 || !result){
                        return
                    }
                    let cepFormat: string;
                    cepFormat = [result.return.cep.slice(0, 5), '-', result.return.cep.slice(5)].join('');
                    endereco = new Endereco()
                    endereco.cep = cepFormat;
                    endereco.bairro = result.return.bairro;
                    endereco.cidade = result.return.cidade;
                    endereco.logradouro = result.return.end;
                    endereco.uf = result.return.uf;
                    return endereco;
                   } catch (err) {
                       throw new Error(err.message)
                   }
                })
            })
        })

        return endereco
    }

    
}
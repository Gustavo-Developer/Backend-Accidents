import { ClientCreate, IClientRepository } from "./repositories/IClientRepository";


class CreateClientService {

  constructor(private clientRepository: IClientRepository){}

   async execute (data: ClientCreate) {
       
    const client = await this.clientRepository.findByCpf(data.cpf);
    
    if (client) {
        throw new Error("CPF já existe!")
    }

    const clientCreated =  await this.clientRepository.save(data);

    return clientCreated;
   }
}

export { CreateClientService }
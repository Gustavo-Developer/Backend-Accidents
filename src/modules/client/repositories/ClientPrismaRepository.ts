import { Client } from "@prisma/client"
import { prismaClient } from "../../../database/client"
import {IClientRepository, ClientCreate, ClientSave} from "./IClientRepository"

class ClientPrismaRepository implements IClientRepository {


    async save({name, 
        cpf,
        birthday, 
        street, 
        cidade,}: ClientCreate): Promise<ClientSave> {
        const client = await prismaClient.client.create({
            data: {
                name, 
                cpf,
                birthday, 
                street, 
                cidade
            },
        })

        const clientResult: ClientSave = {
            name: client.name, 
            cpf: client.cpf,
            birthday: client.birthday, 
            street: client.street, 
            cidade: client.cidade,
            id: client.id
        }

        return clientResult;
    }

    async findByCpf(cpf: string): Promise<Client | null> {
       
        const client =  await prismaClient.client.findFirst({
            where: {
                cpf
            }
        })

        return client;
    }

}

export {ClientPrismaRepository} 
import { Client } from "@prisma/client";
import { IClientRepository } from "./repositories/IClientRepository";

class ListClientService {
  constructor(private clientRepository: IClientRepository) {}

  async execute(): Promise<Client[]> {
    const client = await this.clientRepository.list();

    return client;
  }
}

export { ListClientService };

import { Client } from "@prisma/client";
import { IClientRepository } from "./repositories/IClientRepository";

class UpdateClientService {
  constructor(private clientRepository: IClientRepository) {}

  async execute(): Promise<void> {
    const client = await this.clientRepository.updateClient();

    return client;
  }
}

export { UpdateClientService };

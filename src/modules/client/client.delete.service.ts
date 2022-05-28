import { Client } from "@prisma/client";
import {
  ClientCreate,
  IClientRepository,
} from "./repositories/IClientRepository";

class DeleteClientService {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: ClientCreate): Promise<void> {
    const client = await this.clientRepository.deleteClientById(data.id);

    return client;
  }
}

export { DeleteClientService };

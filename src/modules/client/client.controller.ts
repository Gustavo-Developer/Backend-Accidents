import { Request, Response } from "express";
import { CreateClientService } from "./client.create.service";
import { ListClientService } from "./client.list.service";
import { DeleteClientService } from "./client.delete.service";
import { ClientPrismaRepository } from "./repositories/ClientPrismaRepository";
import { UpdateClientService } from "./client.update.service";

class ClientController {
  async create(request: Request, response: Response) {
    const { body } = request;
    const prismaRepository = new ClientPrismaRepository();
    const createClientService = new CreateClientService(prismaRepository);

    const result = await createClientService.execute(body);

    return response.json(result);
  }

  async list(request: Request, response: Response) {
    const prismaRepository = new ClientPrismaRepository();
    const listClientService = new ListClientService(prismaRepository);

    const result = await listClientService.execute();

    return response.json(result);
  }

  async deleteClientById(id: string): Promise<void> {
    const prismaRepository = new ClientPrismaRepository();
    const deleteClientService = new DeleteClientService(prismaRepository);

    const result = await deleteClientService.delete(id);

    return result;
  }

  async updateClientById(id: string): Promise<void> {
    const prismaRepository = new ClientPrismaRepository();
    const updateClientService = new UpdateClientService(prismaRepository);

    const result = await updateClientService.execute(id);

    return result;
  }
}

export { ClientController };

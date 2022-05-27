import { Request, Response } from "express";
import { CreateClientService } from "./client.create.service";
import { ClientPrismaRepository } from "./repositories/ClientPrismaRepository";

class ClientController {

    async create(request: Request, response: Response) {
        const { body } = request;
        const prismaRepository = new ClientPrismaRepository();
        const createClientService = new CreateClientService(prismaRepository);


        const result = await createClientService.execute(body);

        return response.json(result);
    }
}

export {ClientController}
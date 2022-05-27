import { Request, Response } from "express";
import { CreateAccidentService } from "./accident.create.service";
import { AccidentPrismaRepository } from "./repositories/AccidentPrismaRepository";

class AccidentController {

    async create(request: Request, response: Response) {
        const { body } = request;
        const prismaRepository = new AccidentPrismaRepository();
        const createAccidentService = new CreateAccidentService(prismaRepository);


        const result = await createAccidentService.execute(body);

        return response.json(result);
    }
}

export {AccidentController}
import { Accident } from "@prisma/client"
import { prismaAccident } from "../../../database/accident"
import {IAccidentRepository, AccidentCreate, AccidentSave} from "./IAccidentRepository"

class AccidentPrismaRepository implements IAccidentRepository {


    async save({plate,  
        involved, 
        how,}: AccidentCreate): Promise<AccidentSave> {
        const Accident = await prismaAccident.accident.create({
            data: {
                plate,  
        involved, 
        how
            },
        })

        const AccidentResult: AccidentSave = {
            plate: Accident.plate, 
            involved: Accident.involved,
            how: Accident.how,            
        }

        return AccidentResult;
    }

    async findByPlate(plate: string): Promise<Accident | null> {
       
        const Accident =  await prismaAccident.accident.findFirst({
            where: {
                plate
            }
        })

        return Accident;
    }

}

export {AccidentPrismaRepository} 
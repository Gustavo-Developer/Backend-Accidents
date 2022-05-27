import { Accident } from "@prisma/client";

export type AccidentCreate = {
    plate: string, 
    involved: string,
    how: string, 
    id?: string,
}

export type AccidentSave = {
    plate: string, 
    involved: string,
    how: string, 
    id?: string,
}

export interface IAccidentRepository {
    save(data: AccidentCreate): Promise<AccidentSave>;
    findByPlate(plate:string):Promise<Accident | null>;
}
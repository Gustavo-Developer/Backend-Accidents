import { AccidentCreate, IAccidentRepository } from "./repositories/IAccidentRepository";


class CreateAccidentService {

  constructor(private AccidentRepository: IAccidentRepository){}

   async execute (data: AccidentCreate) {
       
    const accident = await this.AccidentRepository.findByPlate(data.plate);
    
    if (accident) {
        throw new Error("Placa já existe!")
    }

    const accidentCreated =  await this.AccidentRepository.save(data);

    return accidentCreated;
   }
}

export { CreateAccidentService }
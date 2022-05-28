import { Client } from "@prisma/client";

export type ClientCreate = {
  name: string;
  birthday: string;
  cpf: string;
  street: string;
  cidade: string;
  id?: string;
};

export type ClientSave = {
  name: string;
  birthday: string;
  cpf: string;
  street: string;
  cidade: string;
  id: string;
};

export interface IClientRepository {
  save(data: ClientCreate): Promise<ClientSave>;
  findByCpf(cpf: string): Promise<Client | null>;
  list(): Promise<Client[]>;
  updateClient(id: string): Promise<void>;
  deleteClientById(id: string): Promise<void>;
}

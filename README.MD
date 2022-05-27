<p align="center">
  Accident 🚀
  <br>
  <br>

</p>

*Objetivo*
*Modele um sistema para uma empresa de proteção veicular.*

- Nesse sistema existem clientes e terceiros.
- Os clientes podem criar uma conta inserindo informações básicas de cadastro (nome,
cpf, data de nascimento, endereço, cidade).
- Os clientes podem editar alguns dados cadastrados cadastro (endereço, cidade).
- Os clientes podem criar um evento de acidente, onde será possível informar o veículo
- envolvido no acidente e o(s) terceiro(s).
- Os terceiros são cadastrados quando é criado um acidente, se não houver um registro
prévio
- na base de dados.
- Todos os usuários (clientes e terceiros) precisam ter documentos associados as suas
contas.
- Quando houver o cadastro de um cliente que já foi envolvido como terceiro em um
acidente, é preciso migrar o usuário para cliente sem perder o vínculo criado no
acidente. 


```bash

# Rodar aplicação
$ npm run dev

# Rodar Migrates
$ npx prisma migrate dev

# Rodar o Banco de Dados Online com o Prisma
$ npx prisma studio

```
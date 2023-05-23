# Minsait Challenge API

API de fluxo de caixa para o desafio técnico da engenheiro de software backend na Minsait.

## Dependencies 

Para criação desse projeto foram utilizadas as seguintes tecnologias:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose


## Install dependencies:

Para o funcionamento local da aplicação, é necessário instalar as seguintes dependências:

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)



## Running Locally

Para rodar aplicacão local utilizar o comando:

```
$ docker-compose up

ou 

$ docker-compose up -d 
```

No diretorio inicial da aplicacão.

Para parar a aplicacão usar as teclas `Crtl+C` ou :

```
$ docker-compose down
```

## Endpoints

Para testar esses endpoints é possível utilizar ferramentas como Postman.

A API possui um endpoint com 4 funcionalidades diferentes:

POST `v1/payments/`

Body:

```json
{
  "description" : "test",
  "value" : "324234",
  "type": "credit",
  "installments": 3
}
```

Retorno: 

```json
{
  "value": 324234,
  "date": "Tue May 23 2023 13:54:52 GMT+0000 (Coordinated Universal Time)",
  "type": "credit",
  "installments": 3,
  "description": "test",
  "_id": "646cc5ac409f66153e7f966a",
  "__v": 0
}
```

GET `v1/payments/:id`

id:

```
646cc5ac409f66153e7f966a
```

Retorno:

```json
{
  "value": 324234,
  "date": "Tue May 23 2023 13:54:52 GMT+0000 (Coordinated Universal Time)",
  "type": "credit",
  "installments": 3,
  "description": "test",
  "_id": "646cc5ac409f66153e7f966a",
  "__v": 0
}
```

GET All `v1/payments/`

Retorno:

```json
[
  {
    "_id": "646cc5a8409f66153e7f9660",
    "value": 324234,
    "date": "Tue May 23 2023 13:54:48 GMT+0000 (Coordinated Universal Time)",
    "type": "credit",
    "installments": 3,
    "description": "test",
    "__v": 0
  },
  {
    "_id": "646cc5a9409f66153e7f9662",
    "value": 324234,
    "date": "Tue May 23 2023 13:54:49 GMT+0000 (Coordinated Universal Time)",
    "type": "credit",
    "installments": 3,
    "description": "test",
    "__v": 0
  },
  {
    "_id": "646cc5aa409f66153e7f9664",
    "value": 324234,
    "date": "Tue May 23 2023 13:54:50 GMT+0000 (Coordinated Universal Time)",
    "type": "credit",
    "installments": 3,
    "description": "test",
    "__v": 0
  }, ...
  ]
```

Daily Report `v1/payments/daily-report`

Retorno:

```json
{
  "total_income": "264594.72",
  "credit_income": "70000.68",
  "debit_income": "194594.04",
  "credit_payments_number": 7,
  "debit_payments_number": 6,
  "payments": [
    {
      "_id": "646cb9a12b33cfe55cf1e6e5",
      "value": 32432.34,
      "date": "Tue May 23 2023 13:03:29 GMT+0000 (Coordinated Universal Time)",
      "type": "debit",
      "description": "test",
      "__v": 0
    }, ...
    ]
```

## Observações importantes:

- Para fins de simplicidade e projeto local, o docker-compose instancia diretamente as variáveis de acesso ao banco MongoDB
- A API poderá ser melhorada no futuro acrescentando um API gateway para autenticação e autorização
- O método de GET All poderá apresentar, no futuro, query params para filtrar melhor o retorno dos pagamentos
- Pagamentos poderão ter mais atributos dos apresentados nesse projeto
- A hora utilizada no serviço irá depender da hora local utilizada na máquina de hospedagem. No caso de um container Docker, irá utilizar UTC +00


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

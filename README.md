# api_aulao
## Essa api foi criada com o objetivo de praticar o apredizado de consumo de API no frontend do curso de Introdução à Programação das Turmas da Proz Educação.

### Tecnologias
- TypeScript
- Nodejs
- Express
- MongoDB


## Entidades
### Usuário

## Rotas


| VERBO | ENDPOINT | OBJETIVO DO ENDPOINT         |
|-------|----------|------------------------------|
|POST   | /usuario/cadastrar | Cadastrar novo usuário|
|GET    | /usuario/buscarTodos | Retornar listar de todos usuarios cadastrados|
|GET    | /usuario/buscarUm/{email}   | Retornar apenas um usuario           |
|PUT    | /usuario/atualizar/{email}  | Atualizar o cadastro de um usuário   |
|DELETE | /usuario/deletar/{email}    | Deletar o cadastro de um usuário     |

## Quais dados esperados para um cadastro? Exemplo:
  ```json
  {
    "nome": string,
    "turma": string,
    "email": string
  }
```
## Quais dados eu posso atualizar do meu usuário? Qualquer um. Exemplo:
```json
{
  "email": email@examplo.com
}
```

# Desafio do Empréstimo
Sua tarefa de hoje se baseia em criar um API que receba informaçõe de uma pessoa e retorne suas opções de empréstimos possíveis.

## Informações
Os tipos de empréstimos possíveis são:

* **Empréstimo pessoal**: Taxa de juros de 4%.
* **Empréstimo consignado**: Taxa de juros de 2%.
* **Empréstimo com garantia**: Taxa de juros de 3%.

## Exemplo
Você deve implementar uma única rota do tipo post no sequinte formato:

**[POST]** `{{host}}/emprestimo-cliente`

```json
{
    "idade": 18,
    "cpf": "275.484.389-23",
    "nome": "Arthur Pereira",
    "salario": 4000.00,
    "local": "SP"
}
```
Seu código deve retornar o nome do cliente e uma lista com os possíveis empréstimos para o cliente, informando nome e tipo.
```
HTTP/1.1 200 Ok
```
```json
{
    "cliente": "Arthur Pereira",
    "emprestimo": [
        {
            "tipo": "PESSOAL",
            "taxa": 4
        },
        {
            "tipo": "GARANTIA",
            "taxa": 3
        }
    ]
}
```

## Regras

* Conceder o empréstimo pessoal se o salário do cliente for igual ou inferior a R$ 3000.
* Conceder o empréstimo pessoal se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver menos de 30 anos e residir em Ceará (CE).
* Conceder o empréstimo consignado se o salário do cliente for igual ou superior a R$ 5000.
* Conceder o empréstimo com garantia se o salário do cliente for igual ou inferior a R$ 3000.
* Conceder o empréstimo com garantia se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver menos de 30 anos e residir em Ceará (CE).
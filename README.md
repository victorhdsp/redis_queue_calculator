# Redis Queue Calculator

Esse é um programa feito para aprender a usar o Redis, estou usando basicamente um banco redis para guardar uma fila, basicamente através do "producer.js" através de argv no formato: "10+6+1*5" e pelo "consumer.js" eu observo a fila para calcular os valores.

## Instalação

Node: 20.15.1
NPM: 10.9.0
Redis: 6.0.16

1. Utilize o "npm install" para instalar as dependências.

## Utilização

1. Em um terminal use "npm run server".
2. Em um outro terminal utilize "npm run client <calculo>"
    - O calculo pode ser feito de forma parcial: 1 \n 3+ \n 9, o calculo vai ser 13+9.
    - O calculo pode ser feito de forma integral: 15+8, o calculo vai ser 15+8.
    - O calculo pode ser feito de forma argumentos: 5 8 9 +1 + 2, o calculo vai ser 589+1+2.

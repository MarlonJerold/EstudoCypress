## Testes automatizados utilizando Cypress

Nesse repositório, foi realizado teste automatizado em uma tela de login usando javascript.


Para a verificação dos Status do teste, foi usado MOCHAWESOME, onde é possível monitorar os casos de testes com uma visão melhor.
Também, sendo possível a realização das visualizações dos testes diretamente pelo terminal, fazendo com que não seja necessário a utilizando do comando  

```
npm run cypress:open.
```

Visando a melhoria da velocidade, optei por utilizar

```
npx cypress run --reporter mochawesome
```

Fazendo com que seja atualizado pelo mochawesome, não será necessário usar a tela do cypress, fazendo com que o processo de desenvolvimento dos testes ocorra de forma mais rápida e eficiente.

Imagem de como será visualizado os testes.

![img01](https://user-images.githubusercontent.com/63025001/224199428-dfc75aa1-e8a4-41f6-bd77-d20314f826a7.png)

utilizando o seguinte comando

```
npx cypress run
```
Será possível monitor diretamente pelo terminal.

![npmrun01](https://user-images.githubusercontent.com/63025001/224200092-b5524dd2-6d8b-4d36-9d78-febf41231c55.png)

![npmrun02](https://user-images.githubusercontent.com/63025001/224200339-f5f27a44-5a27-4948-8a5c-7c015bc40e6f.png)

![npmrun03](https://user-images.githubusercontent.com/63025001/224200495-6e53f490-2f02-4954-ba18-133b80c13cef.png)

Estarei atualizando sempre quando disponível. vlww

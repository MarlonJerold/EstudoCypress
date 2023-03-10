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

fazendo com que seja atualizado o mochawesome, com isso, não será necessário usar a tela do cypress, fazendo com que o processo de desenvolvimento dos testes ocorra de forma mais rápida e eficiente.



# Dragonpedia

## O projeto

O Dragonpedia é um sistema que funciona como um catálogo de dragões, permitindo a consulta, adição, edição e deleção de registros. A tecnologia utilizada para implementar a aplicação foi o Angular 12. Para testes, utilizei as ferramentas Jasmine e Karma, e para realizar a criptografia de credenciais de usuários, utilizei a biblioteca CryptoJS.

Por não haver uma indicação clara no enunciado do projeto sobre o armazenamento de usuários, optei por utilizar o localStorage como um "banco de dados" fake. Entretanto, em uma aplicação real, mesmo com credenciais criptografadas, não seria recomendável armazenar este tipo de informações no lado do cliente.

## Como executar a aplicação

1. Clone o repositório com o comando ```git clone git@github.com:munaretto/teste-sicredi.git``` ou ```https://github.com/munaretto/teste-sicredi.git```
2. No diretório do projeto clonado, acesse a pasta ```/app``` e instale as dependências do projeto com o comando ```npm install```
3. Após o termino da instalação das dependências, utilize ```npm start``` para rodar o projeto localmente no endereço localhost:4200

## Como executar os testes unitários da aplicação
1. Para executar os testes unitários do projeto, digite o comando ```npm test``` dentro do diretório ```/app```

## Possíveis melhorias
Algumas possíveis melhorias para a aplicação seriam:
* Aumentar a cobertura de testes para outros services e componentes importantes. Atualmente, somente o service que realiza a comunicação com o banco de dados possui testes unitários implementados.
* Adicionar mais animações e transições entre telas, para suavizar a experiência de navegação.

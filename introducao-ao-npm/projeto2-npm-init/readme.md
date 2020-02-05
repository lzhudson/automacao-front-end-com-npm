## Inciando projetos com npm
**Iniciando projetos:**
Inicia um projeto com npm.
npm init
Ex:

    npm init
    npm init -y

Ao rodar esse comando, a linha de comando gerara perguntas sobre o projeto, como nome, author, link do repositório no github e etc.
Para pular todas essas perguntas basta usar a flag **-y**.

**Pasta node_modules:**

A pasta node_modules é onde ficam localizadas todas as duas dependências, a vantagem de se usar um gerenciador de pacotes é que podemos migrar todo o projeto sem precisamos mover a pasta node_modules para cada lugar, pois o arquivo package.json, serve justamente para armazenarmos essas dependências e apenas com esse arquivo e um comando podemos instala-las em qualquer lugar.
Ao mover apenas o arquivo package.json para qualquer lugar, basta rodar o comando npm install na pasta onde se localiza o arquivo que o mesmo instalará todas as dependências necessárias.

    npm install
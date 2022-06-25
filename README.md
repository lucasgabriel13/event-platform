# Event Platform

![event-platform-mockup](https://user-images.githubusercontent.com/44211093/175783670-ecb5085a-77f6-4453-b81c-fb4fc9310c49.png)

## 💻 O projeto

Aplicação desenvolvida durante o Ignite Lab, evento oferecido pela [Rocketseat](https://rocketseat.com.br/), que consiste em uma plataforma para a realização de eventos
on-line, onde cada aula é disponibilizada em um dia específico da semana.

Todas as aulas disponibilizadas no evento são cadastradas no [GraphCMS](https://graphcms.com/), uma ferramenta CMS que oferece uma API GraphQL de conteúdos, sendo utilizada
tanto na criação das aulas, cadastradas no próprio painel da ferramenta, quanto a gravação de inscritos (através das Mutations do GraphQL)no banco de dados da ferramenta.

🖱️ - [Clique aqui e veja a aplicação!](https://event-platform-brown.vercel.app/)

## ✨ Tecnologias

- [ ] Vite
- [ ] React
- [ ] Typescript
- [ ] TailwindCSS
- [ ] GraphQL
- [ ] Apollo
- [ ] Codegen GraphQL
- [ ] vime

## 🚀Como executar

Clone o repositório:

``` bash
git clone https://github.com/lucasgabriel13/event-platform.git

```

Execute os comandos:

```bash

# Entre na pasta clonada
cd event-platform

# Instale as dependências
npm install

# Crie um arquivo .env.local e insira as variáveis que estão no .env.example
VITE_API_URL=
VITE_API_ACCESS_TOKEN=

# Execute a aplicação
npm run dev

```

A aplicação estará disponível no seu browser pelo endereço http://localhost:3000.

## 📕 Licença
Este projeto está sob a licença [MIT](https://github.com/lucasgabriel13/event-platform/blob/master/LICENCE).

---

<p align="center">Desenvolvido com 💜 por Lucas Gonçalves e Rocketseat</p>

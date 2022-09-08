# GraphQL (Graph Query Language)

- https://graphql.org/
- https://graphql.org/code/
- https://github.com/dotansimha/graphql-yoga (Conseiller)
```
Schema : Contract (Interface)

schema {
   query: Query,
   mutation: Mutation
}

```

1. Install graphql-yoga (Offre beaucoup de resources pour travailler avec graphQL)
- https://github.com/jeandev84/graphql-yoga
```
Generate un fichier package.json par default

$ npm init -yes

{
  "name": "graphQLtutofr",
  "version": "1.0.0",
  "description": "- https://graphql.org/ - https://graphql.org/code/ - https://github.com/dotansimha/graphql-yoga (Conseiller) ``` Schema : Contract (Interface)",
  "type": "module", TRES IMPORTANT A AJOUTER!!!!
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jeandev84/graphQLtutofr.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/jeandev84/graphQLtutofr/issues"
  },
  "homepage": "https://github.com/jeandev84/graphQLtutofr#readme",
  "dependencies": {
    "graphql-yoga": "^2.13.13"
  }
}



Installation de GraphQL Yoga
$ npm i graphql-yoga (Depricated)
$ npm i @graphql-yoga/node graphql
https://github.com/prisma-labs/graphql-yoga
```


2. Creer fichier src/index.js

```

import { GraphQLServer } from "graphql-yoga"

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')


// Definir le schema de graphQL (Contract)
// Notre contract ce que nous offrons a travers notre serveur graphQL
// Type Query : une requette Query (GET)
const typeDefs = `
     type Query {
         hello(name: String): String!
     }
`;

// Implementation de notre contract
const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name || 'World'}`,
    },
};


// Server
const server = new GraphQLServer({typeDefs, resolvers});

server.start(() => console.log("Server is running on localhost:4000"));

```


3. Lunch Server 
``` 
$ node src/index.js
```


4. Install nodemon (Relance le server a chaque modification pas besoin de raffraichir la page)
- https://www.npmjs.com/package/nodemon

```
"nodemon": "^2.0.7"
$ npm i nodemon || npm i nodemon@2.0.7

Lunch server 
$ npx nodemon src/index.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Server is running on localhost:4000

==================================================================== 

{
  ....
  "scripts": {
    "start": "nodemon src/index.js"
  },
  ....
}

$ npm run start


> graphQLtutofr@1.0.0 start
> nodemon src/index.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Server is running on localhost:4000

```
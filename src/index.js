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
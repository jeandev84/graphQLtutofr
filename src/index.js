import { GraphQLServer } from "graphql-yoga"
import {Query} from "./resolvers/Query.mjs";

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')


// Definition de schema (Contract)
const typeDefs = "src/schema/schema.graphql";


// Implementation de notre contract
const resolvers = {
    Query,
};


// Server
const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => console.log("Server is running on localhost:4000"));
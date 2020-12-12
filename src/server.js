const { Console } = require('console');
const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();
console.log('Server is running!');
console.log('Go to localhost:4000 to test!');
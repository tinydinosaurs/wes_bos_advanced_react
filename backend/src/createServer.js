// this is where we import the grapql yoga sever
const { GraphQLServer } = require('graphql-yoga');

// need to also import resolvers. These answer the question where does this data come from
// or what does this data do in the database. Query resolvers pull data, mutation resolvers push data.
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// This is where we create the graphql server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation: Mutation,
            Query: Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db }) // we need to access the database from resolvers, and we do this using context
    });
}

module.exports = createServer;

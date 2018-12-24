// this file connects to the  remote prisma db and gives us the ability to query it with javascript
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql', // this is the the generated prisma.graphql stuff. This is why we pull this data down from prisma in a post-deploy hook.
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
});

module.exports = db;

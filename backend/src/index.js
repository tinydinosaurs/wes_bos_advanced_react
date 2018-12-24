// let's go! Time to start up our node server
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO use express middleware to handle cookies (JWT), populate current user

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    deets => {
        console.log(
            `HOORAY! You have a server running on
            http://localhost:${deets.port}!`
        );
    }
);

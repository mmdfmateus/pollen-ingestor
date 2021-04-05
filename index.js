import express, { json } from 'express'

import router from './routes.js';

const app = express();
const port = 9000

app.use(json());
app.use(router);

app.listen(port, function () {
    console.log('Express server listening on ', port);
});
import express, { json } from 'express'
import swaggerUi from 'swagger-ui-express';

import router from './routes.js';
import swaggerDocument from '../swagger.json';

const app = express();
const port = 9000

app.use(json());
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(port, function () {
    console.log('Express server listening on ', port);
});
import express from 'express';
import config from 'config';
import connect from './helpers/db_mongo/connect';
import logger from './helpers/loggers';
import RestrictedRoutes from './routes/restricted/restricted';
import OpenRoutes from './routes/open/open';

const app = express();

const port = config.get("port");




app.listen(3000, async () => {

    console.log(`Example app listening on port ${port}!`);
    await connect().then(logger.info('connexion établie'));
    OpenRoutes(app);
});


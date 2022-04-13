import express from 'express';
import config from 'config';
import connect from './helpers/db_mongo/connect';

const app = express();

const port = config.get("port");




app.listen(3000, () =>
    console.log(`Example app listening on port ${port}!`),
);

connect();

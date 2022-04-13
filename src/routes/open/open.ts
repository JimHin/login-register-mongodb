import { Express, Request, Response } from 'express';
import logger from '../../helpers/loggers';
function OpenRoutes(app: Express) {
    app.get('/', (req: Request, res: Response) => {

        res.sendStatus(200);
        logger.info('route home');
    });

    app.get('/login', (req, res) => {
        res.sendStatus(200);
    });

    app.get('/register', (req, res) => {
        res.sendStatus(200);
    });

}
export default OpenRoutes;
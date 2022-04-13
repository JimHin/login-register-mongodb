import { Express } from 'express';
function RestrictedRoutes(app: Express) {
    app.get('/dashboard', (req, res) => {
        res.sendStatus(200);
    });
}
export default RestrictedRoutes;
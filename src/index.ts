import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import  './controllers/LoginControllers';

const app = express();
const port = 3080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['fredfs'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import  './controllers/LoginControllers';
import './controllers/RootController'

const app = express();
const port = 3080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['fredfs'] }));
app.use(AppRouter.getInstance());

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});
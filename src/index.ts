import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
const port = 3080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['fredfs'] }));
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});
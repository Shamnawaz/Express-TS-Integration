import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();
const port = 3080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});
import express, { Request, Response } from 'express'

const app = express();
const port = 3080;

app.get('/', (req: Request, res: Response): void => {
    res.send(`
        <div>   
            <h1>Hi there!</h1>
        </div>
        `)
})

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
})
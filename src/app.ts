import express, {Router, Request as req, Response as res} from 'express'
import cors from 'cors';
import db from './database/dbConnection';

const app = express();

const route = Router();

db;
app.use(express.json());

app.use(cors());


route.get('/', (req: req, res:res)=>{
    res.json({message: "Testando um Hello World aqui"})
});

app.use(route);

export default app;


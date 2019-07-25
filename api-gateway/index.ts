import http from 'http';
import express from 'express';
import httpProxy from 'express-http-proxy';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const userServiceProxy = httpProxy('http://localhost:9001');
const productServiceProxy = httpProxy('http://localhost:9002');

app.get('/', (_, res) => res.send('Hello from API-Gateway'));

app.use('/users', (req, res, next) => {
	userServiceProxy(req, res, next);
});

app.use('/products', (req, res, next) => {
	productServiceProxy(req, res, next);
});

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
server.listen(9000);

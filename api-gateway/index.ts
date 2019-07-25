import http from 'http';
import express, { Response } from 'express';
import httpProxy from 'express-http-proxy';
import helmet from 'helmet';
import morgan from 'morgan';

import isReachable from 'is-reachable';

const app = express();

const userServiceProxy = httpProxy('http://localhost:9001');
const productServiceProxy = httpProxy('http://localhost:9002');

app.get('/', (_, res: Response) => res.send('Hello from API-Gateway'));

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

// HealthCheck
app.get('/status', async (_, res: Response) => {
	const userService = 'http://localhost:9001';
	const productService = 'http://localhost:9002';
	const orderService = 'http://localhost:9003';
	const filesService = 'http://localhost:9004';
	const notificationService = 'http://localhost:9005';
	const paymentService = 'http://localhost:9006';

	res.json({
		userService: (await isReachable(userService, { timeout: 500 }))
			? 'Online'
			: 'Offline',
		productService: (await isReachable(productService, { timeout: 500 }))
			? 'Online'
			: 'Offline',
		orderService: (await isReachable(orderService, { timeout: 500 }))
			? 'Online'
			: 'Offline',
		filesService: (await isReachable(filesService, { timeout: 500 }))
			? 'Online'
			: 'Offline',
		notificationService: (await isReachable(notificationService, {
			timeout: 500
		}))
			? 'Online'
			: 'Offline',
		paymentService: (await isReachable(paymentService, { timeout: 500 }))
			? 'Online'
			: 'Offline'
	});
});

const server = http.createServer(app);
server.listen(9000);

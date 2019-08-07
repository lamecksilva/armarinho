import http from 'http';
import express, { Response, Request, NextFunction } from 'express';
import httpProxy from 'express-http-proxy';
import helmet from 'helmet';
import morgan from 'morgan';

import isReachable from 'is-reachable';

const app = express();

const authServiceProxy = httpProxy('http://localhost:9001');
const userServiceProxy = httpProxy('http://localhost:9002');

app.get('/', (_, res: Response) => res.send('Hello from API-Gateway'));

app.use('/auth', (req: Request, res: Response, next: NextFunction) => {
	authServiceProxy(req, res, next);
});

app.use('/users', (req: Request, res: Response, next: NextFunction) => {
	userServiceProxy(req, res, next);
});

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HealthCheck
app.get('/status', async (_, res: Response) => {
	const authService = 'http://localhost:9001';
	const userService = 'http://localhost:9002';
	const productService = 'http://localhost:9003';
	const orderService = 'http://localhost:9004';
	const filesService = 'http://localhost:9005';
	const notificationService = 'http://localhost:9006';
	const paymentService = 'http://localhost:9007';

	res.json({
		authService: (await isReachable(authService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		userService: (await isReachable(userService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		productService: (await isReachable(productService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		orderService: (await isReachable(orderService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		filesService: (await isReachable(filesService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		notificationService: (await isReachable(notificationService, {
			timeout: 300
		}))
			? 'Online'
			: 'Offline',
		paymentService: (await isReachable(paymentService, { timeout: 300 }))
			? 'Online'
			: 'Offline'
	});
});

const server = http.createServer(app);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () =>
	console.log(`API-Gateway running on http://localhost:${PORT}`)
);

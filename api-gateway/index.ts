import http from 'http';
import express, { Response, Request, NextFunction } from 'express';
import httpProxy from 'express-http-proxy';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import isReachable from 'is-reachable';

// Module with services urls
import urls from './utils/urls';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authServiceProxy = httpProxy(urls.authService);

app.get('/', (_, res: Response) => res.send('API Gateway Online'));

app.use('/auth', (req: Request, res: Response, next: NextFunction) => {
	authServiceProxy(req, res, next);
});

// HealthCheck
app.get('/status', async (_, res: Response) => {
	res.json({
		authService: (await isReachable(urls.authService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		productService: (await isReachable(urls.productService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		filesService: (await isReachable(urls.filesService, { timeout: 300 }))
			? 'Online'
			: 'Offline',
		adminClient: (await isReachable(urls.adminClient, { timeout: 300 }))
			? 'Online'
			: 'Offline'
	});
});

// Create http server
const server = http.createServer(app);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () =>
	console.log(`API-Gateway running on http://localhost:${PORT}`)
);

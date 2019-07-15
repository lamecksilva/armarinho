import { Express } from 'express';
import applyRoutes from './routes';

export default (app: Express) => {
	applyRoutes(app);
};

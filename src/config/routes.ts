import { Express } from 'express';
import { PersonController } from '../controllers';

export default (app: Express) => {
	// Person Routes
	app.use('/user/register', PersonController.createUser);

	// .... More routes here
};

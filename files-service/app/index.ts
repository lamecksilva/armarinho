import { Application } from 'express';

import imagesRouter from './images/router';

export default (app: Application) => {
	app.use('/images', imagesRouter);
};

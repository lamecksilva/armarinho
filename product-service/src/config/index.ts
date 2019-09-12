import dev from './env.dev';
import prod from './env.prod';

export default process.env.NODE_ENV == 'development' ? dev : prod;

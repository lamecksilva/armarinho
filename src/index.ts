// Importing stuff
import express from 'express';

// Importing dotenv file
require('dotenv').config();

// Create new instance from express
const app = express();

// Test Route
app.get('/', (_, res) => {
	res.send('Hello ts-node!');
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`[SERVER] Running at http://localhost:${PORT}`);
});

// Exporting server (this is for tests)
export default app;

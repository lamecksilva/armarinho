require('dotenv').config();
const express = require('express');

const applyConfigs = require('./app/config');

const app = express();

applyConfigs(app);

app.get('/', (req, res) => res.send('Hello from notifications service'));

const PORT = process.env.PORT || 9006;

app.listen(PORT, () =>
	console.log(`Notification service running on http://localhost:${PORT}`)
);

module.exports = {
	apps: [
		{
			name: 'Armarinho-API-Gateway',
			script: './index.ts',
			ignore_watch: ['node_modules'],
			watch: true,
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

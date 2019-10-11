module.exports = {
	apps: [
		{
			name: 'Armarinho-Product-Service',
			script: './src/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

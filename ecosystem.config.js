module.exports = {
	apps: [
		{
			name: 'API-Gateway',
			script: './api-gateway/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		},
		{
			name: 'Auth-Service',
			script: './auth-service/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

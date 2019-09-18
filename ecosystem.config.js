module.exports = {
	apps: [
		{
			name: 'Armarinho-API-Gateway',
			script: './api-gateway/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		},
		{
			name: 'Armarinho-Auth-Service',
			script: './auth-service/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		},
		{
			name: 'Armarinho-Admin-Client',
			script: 'cd admin-client && yarn start',
			watch: false,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		},
		{
			name: 'Armarinho-Product-Service',
			script: './product-service/src/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

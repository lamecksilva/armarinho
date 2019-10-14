module.exports = {
	apps: [
		{
			name: 'Armarinho-API-Gateway',
			script: 'ts-node api-gateway/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		},
		{
			name: 'Armarinho-Auth-Service',
			script: 'ts-node auth-service/index.ts',
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
			script: 'ts-node product-service/src/index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		},
		{
			name: 'Files-Service',
			script: 'ts-node files-service/index.ts',
			watch: true,
			ignore_watch: ['node_modules', 'static'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

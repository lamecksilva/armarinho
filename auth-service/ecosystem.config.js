module.exports = {
	apps: [
		{
			name: 'Auth-Service',
			script: './index.ts',
			watch: true,
			ignore_watch: ['node_modules'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

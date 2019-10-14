module.exports = {
	apps: [
		{
			name: 'Files-Service',
			script: './index.ts',
			watch: true,
			ignore_watch: ['node_modules', 'static'],
			log_date_format: 'DD-MM-YYYY HH:mm Z'
		}
	]
};

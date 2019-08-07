export default {
	authService: process.env.AUTH_SERVICE_URL || 'http://localhost:9001',
	userService: process.env.USER_SERVICE_URL || 'http://localhost:9002',
	productService: process.env.PRODUCT_SERVICE_URL || 'http://localhost:9003',
	orderService: process.env.ORDER_SERVICE_URL || 'http://localhost:9004',
	filesService: process.env.FILES_SERVICE_URL || 'http://localhost:9005',
	notificationService:
		process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:9006',
	paymentService: process.env.PAYMENT_SERVICE_URL || 'http://localhost:9007'
};

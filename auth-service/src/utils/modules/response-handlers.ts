import { Response } from 'express';

/**
 * SuccessResponseHandler
 *
 * Handler to send success responses
 *
 * @param {Response} res Express response object
 * @param {number} status Status of http response
 * @param payload Data to be sende to client
 */
export async function SuccessResponseHandler(
	res: Response,
	status: number,
	payload: any
): Promise<Response> {
	return res.status(status).json({ success: true, payload });
}

/**
 * ErrorResponseHandler
 *
 * Handler to send error responses
 *
 * @param res Express response object
 * @param status Status of http response
 * @param errors Error object
 * @param message Message to be displayed to user (or dev)
 */
export async function ErrorResponseHandler(
	res: Response,
	status: number,
	errors: any,
	message: string
): Promise<Response> {
	return res.status(status).json({ success: false, message, errors });
}

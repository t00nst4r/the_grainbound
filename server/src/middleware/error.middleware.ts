import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response
) => {
    const statusCode = err.statusCode || 500;

    console.error(`[Grainbound Error]: ${err.message}`);

    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'An unexpected disturbance in the grain occurred.',
        // Only show the stack trace if we aren't in production
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
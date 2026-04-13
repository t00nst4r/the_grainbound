import {Request, Response, NextFunction} from "express";
import {FreebieService} from "../services/freebies.service";

const freebieService = new FreebieService();

export const subscribe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required to dispatch the key.' });
        }

        // The service handles the ephemeral email and the permanent key storage
        await freebieService.subscribe(name, email);

        res.status(201).json({
            success: true,
            message: 'Messenger dispatched. Check your inbox.'
        });
    } catch (error) {
        next(error);
    }
};

export const getFreebies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const key = req.query.key as string;
        const isValid = await freebieService.validateKey(key);

        if (!isValid) {
            return res.status(403).json({ error: 'Access Key is invalid or expired.' });
        }

        const data = await freebieService.getFreebies();
        res.json(data);
    } catch (error) {
        next(error);
    }
};
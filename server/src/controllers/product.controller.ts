import {NextFunction, Request, Response} from 'express';
import { ProductService } from '../services/product.service';

const productService = new ProductService();

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("hier ben ik")
        const data = await productService.getAllProducts();
        res.json(data);
    } catch (error) {
        // This sends the error to the globalErrorHandler
        next(error);
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const data = await productService.getProductById(id as string)
        res.json(data)
    } catch (error) {
        next(error)
    }
};
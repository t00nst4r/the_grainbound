import { Product } from '@models/product';
import fs from 'fs/promises';
import path from "node:path";

export class ProductService {
    private dataPath = path.join(__dirname, '../../data/products.json');

    async getAllProducts(): Promise<Product[]> {
        try {
            const rawData = await fs.readFile(this.dataPath, 'utf-8');
            const products: Product[] = JSON.parse(rawData);

            return products.map(p => ({
                ...p
            }));
        } catch (error) {
            console.error('Failed to read products file:', error);
            return []; // Return empty array or throw error for your global handler
        }
    }

    async getProductById(id: string): Promise<Product | undefined> {
        const products = await this.getAllProducts();
        return products.find(p => p.id === id);
    }
}
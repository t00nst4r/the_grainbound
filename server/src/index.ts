import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes';
import {globalErrorHandler} from "./middleware/error.middleware";
import freebiesRoutes from "./routes/freebies.routes";
import path from "path";
import fs from "fs";
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

const envPath = path.join(
    process.cwd(),
    '..',                // Up to thegrainbound.com
    'public_html',       // Down into public_html
    '.builds',
    'config',
    '.env'
);

// 2. Check and Load
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log("✅ Env loaded from relative path:", envPath);
} else {
    // Fallback to local .env in the nodejs folder
    dotenv.config();
    console.log("⚠️ External env not found, using local project .env");
}


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/freebies', freebiesRoutes);

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`[Grainbound Server] Running at http://localhost:${PORT}`);
});
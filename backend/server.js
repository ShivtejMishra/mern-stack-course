import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from "path";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes

// Database + Server Start
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve()

app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server started at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("❌ Failed to connect to MongoDB:", error.message);
});

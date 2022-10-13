import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getProducts } from './endpoints/getProducts';
import { createPurchase } from './endpoints/createPuschase';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/products',getProducts)

app.post('/purchases',createPurchase)

app.listen(3003, () => {
    console.log('The server is running in http://localhost:3003')
})
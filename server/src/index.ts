import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './endpoints/testConnection';
import { getProducts } from './endpoints/getProducts';
import { setNewQty } from './endpoints/setNewQty';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/test',testConnection)

app.get('/products',getProducts)

app.get('/set-new-quantity',setNewQty)

app.listen(3003, () => {
    console.log('The server is running in http://localhost:3003')
  })
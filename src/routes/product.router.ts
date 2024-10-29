
import express from 'express';
import ProductController from '../controllers/product.controller';
import  ProductService  from '../services/products.service';

const productRouter = express.Router();
const productService = new ProductService();
const productController = new ProductController(productService);

// @ts-ignore
ticketRouter.get('/:id', (req, res) => productController.getProducts(req, res));


export { productRouter };

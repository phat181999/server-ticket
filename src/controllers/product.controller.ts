import { Request, Response } from 'express';
import { ProductService } from '../services/products.service';

export default class ProductController {

    constructor(
        private productService: ProductService
    ){

    }
  async getProducts(req: Request, res: Response): Promise<Response> {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10; 

    try {
      const products = await this.productService.getProducts(page, limit);
      return res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}


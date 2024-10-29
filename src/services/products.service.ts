import { Product } from "../models/product.model";

export default class ProductService {
  async getProducts(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const products = await Product.findAndCountAll({
      limit: limit,
      offset: offset,
    });

    return {
      totalItems: products.count,
      totalPages: Math.ceil(products.count / limit),
      currentPage: page,
      items: products.rows.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        rating: {
          average: product.rating.average,
          reviews: product.rating.reviews,
        },
        image: product.image,
      })),
    };
  }
}


import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  price: string;

  @Column({ type: DataType.STRING })
  image: string;

  @Column({ type: DataType.JSON })
  rating: {
    average: number;
    reviews: number;
  };
}

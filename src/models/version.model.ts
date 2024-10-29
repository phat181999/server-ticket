import { Table, Column, Model, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import Board from './board.model';
import Ticket from './ticket.model';

@Table({
  tableName: 'versions',
  timestamps: true,
})
export default class Version extends Model<Version> {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  version!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt!: Date; 

  @ForeignKey(() => Board)
  @Column
  boardId!: number;
  
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW, 
  })
  updatedAt!: Date; 

  
  @HasMany(() => Board)
  boards!: Board[];

  @HasMany(() => Ticket)
  tickets!: Ticket[];

}

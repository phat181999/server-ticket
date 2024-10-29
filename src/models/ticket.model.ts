import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Board from './board.model';
import { TicketStatus } from '../utils/contants/ticker.constant';
import Version from './version.model';

@Table({
  tableName: 'tickets',
  timestamps: true,
})
export default class Ticket extends Model<Ticket> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
  })
  description!: string;

  @ForeignKey(() => Board)
  @Column
  boardId!: number;

  @Column({
    type: DataType.ENUM,
    values: Object.values(TicketStatus),
    defaultValue: TicketStatus.TODO,
  })
  status!: TicketStatus;

  @ForeignKey(() => Version)  // Add this line
  @Column
  versionId!: number;
}

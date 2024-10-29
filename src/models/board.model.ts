import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import Ticket from './ticket.model';
import Version from './version.model';

@Table({
  tableName: 'boards',
  timestamps: true,
})
export default class Board extends Model<Board> {

  @ForeignKey(() => Version)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  versionId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => Ticket)
  tickets!: Ticket[];

  @HasMany(() => Version)
  versions!: Version[];
}

import {
  Table,
  Model,
  Column,
  DataType,
} from "sequelize-typescript";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"]}
  },
  paranoid: true,
  tableName: "realTime"
})
export class RealTime extends Model<RealTime> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  item!: string
}

export default [RealTime, ];
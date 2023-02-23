import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff';

export default class Store extends BaseModel {

  public static table = 'stores'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "manager_staff_id", })
  public managerStaffId: number;

  @column({ serializeAs: "address_id", })
  public addressId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Staff, {
    foreignKey: 'managerStaffId'
  })
  public managerStaff: BelongsTo<typeof Staff>
}

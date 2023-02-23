import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Store from './Store'

export default class Staff extends BaseModel {
  public static table = 'staffs'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "first_name" })
  public firstName: string

  @column({ serializeAs: "last_name" })
  public lastName: string

  @column({ serializeAs: "address_id" })
  public addressId: number

  @column({ serializeAs: "email" })
  public email: string

  @column({ serializeAs: "store_id" })
  public storeId: number

  @column({ serializeAs: "active" })
  public active: number

  @column({ serializeAs: "username" })
  public username: string

  @column({ serializeAs: "password" })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Address, {
    foreignKey: 'addressId'
  })
  public address: BelongsTo<typeof Address>

  @belongsTo(() => Store, {
    foreignKey: 'storeId'
  })
  public store: BelongsTo<typeof Store>
}

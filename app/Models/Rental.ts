import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff'
import Customer from './Customer'
import Inventorie from './Inventory'

export default class Rental extends BaseModel {
  public static table = 'rentals'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'rental_date' })
  public rentalDate: DateTime

  @column({ serializeAs: 'inventory_id' })
  public inventoryId: number

  @column({ serializeAs: 'customer_id' })
  public customerId: number

  @column({ serializeAs: 'return_date' })
  public returnDate: DateTime

  @column({ serializeAs: 'staff_id' })
  public staffId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Inventorie, {
    foreignKey: 'inventoryId'
  })
  public inventory: BelongsTo<typeof Inventorie>


  @belongsTo(() => Staff, {
    foreignKey: 'staffId'
  })
  public staff: BelongsTo<typeof Staff>

  @belongsTo(() => Customer, {
    foreignKey: 'customerId'
  })
  public customer: BelongsTo<typeof Customer>
}

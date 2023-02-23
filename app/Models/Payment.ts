import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'
import Staff from './Staff'
import Rental from './Rental'

export default class Payment extends BaseModel {
  public static table = 'payments'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'customer_id' })
  public customerId: number

  @column({ serializeAs: 'staff_id' })
  public staffId: number

  @column({ serializeAs: 'rental_id' })
  public rentalId: number

  @column({ serializeAs: 'amount' })
  public amount: number

  @column({ serializeAs: 'payment_date' })
  public paymentDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Customer, {
    foreignKey: 'customerId'
  })
  public customer: BelongsTo<typeof Customer>

  @belongsTo(() => Staff, {
    foreignKey: 'staffId'
  })
  public staff: BelongsTo<typeof Staff>

  @belongsTo(() => Rental, {
    foreignKey: 'rentalId'
  })
  public rental: BelongsTo<typeof Rental>
}

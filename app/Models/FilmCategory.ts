import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Film from './Film'
import Category from './Category'

export default class FilmCategory extends BaseModel {
  public static table = 'film_categories'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'film_id' })
  public filmId: number

  @column({ serializeAs: 'category_id' })
  public categoryId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Film, {
    foreignKey: 'filmId'
  })
  public film: BelongsTo<typeof Film>

  @belongsTo(() => Category, {
    foreignKey: 'categoryId'
  })
  public category: BelongsTo<typeof Category>
}

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Language from './Language'

export default class Film extends BaseModel {
  public static table = 'films'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'title' })
  public title: string

  @column({ serializeAs: 'description' })
  public description: string

  @column({ serializeAs: 'release_year' })
  public releaseYear: DateTime

  @column({ serializeAs: 'language_id' })
  public languageId: number

  @column({ serializeAs: 'original_language_id' })
  public originalLanguageId: number

  @column({ serializeAs: 'rental_duration' })
  public rentalDuration: number

  @column({ serializeAs: 'rental_rate' })
  public rentalRate: number

  @column({ serializeAs: 'length' })
  public length: number

  @column({ serializeAs: 'rating' })
  public rating: string

  @column({ serializeAs: 'special_features' })
  public specialFeatures: string

  @column({ serializeAs: 'replacement_cost' })
  public replacementCost: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Language, {
    foreignKey: 'languageId'
  })
  public language: BelongsTo<typeof Language>


  @belongsTo(() => Language, {
    foreignKey: 'originalLanguageId'
  })
  public originalLanguage: BelongsTo<typeof Language>
}

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Actor from './Actor'
import Film from './Film'

export default class FilmActor extends BaseModel {
  public static table = 'film_actors'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'actor_id' })
  public actorId: number

  @column({ serializeAs: 'film_id' })
  public filmId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Actor, {
    foreignKey: 'actorId'
  })
  public actor: BelongsTo<typeof Actor>

  @belongsTo(() => Film, {
    foreignKey: 'filmId'
  })
  public film: BelongsTo<typeof Film>
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmActor from 'App/Models/FilmActor';
export default class FilmActorsController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await FilmActor.query().preload('actor').preload('film');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await FilmActor.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            actor_id: schema.number(),
            film_id: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var filmActor = new FilmActor();
        filmActor.actorId = fields.actor_id;
        filmActor.filmId = fields.film_id;
        var result = await filmActor.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            actor_id: schema.number(),
            film_id: schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmActor = await FilmActor.findOrFail(id);

        filmActor.actorId = fields.actor_id;
        filmActor.filmId = fields.film_id;
        var result = await filmActor.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var filmActor = await FilmActor.findOrFail(id);
        await filmActor.delete();
        return { message: "The FilmActor has been deleted!" };
    }
}

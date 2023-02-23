import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmCategory from 'App/Models/FilmCategory';
export default class FilmCategoriesController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await FilmCategory.query().preload('category').preload('film');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await FilmCategory.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            film_id: schema.number(),
            category_id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var filmCategory = new FilmCategory();
        filmCategory.filmId = fields.film_id;
        filmCategory.categoryId = fields.category_id;
        var result = await filmCategory.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            film_id: schema.number(),
            category_id: schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmCategory = await FilmCategory.findOrFail(id);
        filmCategory.filmId = fields.film_id;
        filmCategory.categoryId = fields.category_id;
        var result = await filmCategory.save();

        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var filmCategory = await FilmCategory.findOrFail(id);
        await filmCategory.delete();
        return { message: "The FilmCategory has been deleted!" };
    }
}

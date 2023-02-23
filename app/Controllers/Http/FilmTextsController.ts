import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import FilmText from 'App/Models/FilmText';
export default class FilmTextsController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await FilmText.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await FilmText.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            title: schema.string(),
            description: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var filmTExt = new FilmText();
        filmTExt.title = fields.title;
        filmTExt.description = fields.description;
        var result = await filmTExt.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            title: schema.string(),
            description: schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var filmTExt = await FilmText.findOrFail(id);
        filmTExt.title = fields.title;
        filmTExt.description = fields.description;
        var result = await filmTExt.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var filmTExt = await FilmText.findOrFail(id);
        await filmTExt.delete();
        return { message: "The filmText has been deleted!" };
    }
}

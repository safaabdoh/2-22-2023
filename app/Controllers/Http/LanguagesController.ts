import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Language from 'App/Models/Language';
export default class LanguagesController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Language.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Language.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            name: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var languages = new Language();
        languages.name = fields.name;
        var result = await languages.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            name: schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var languages = await Language.findOrFail(id);
        languages.name = fields.name;
        var result = await languages.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var languages = await Language.findOrFail(id);
        await languages.delete();
        return { message: "The Languages has been deleted!" };
    }
}

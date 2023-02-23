import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Country from 'App/Models/Country';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class CountriesController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Country.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Country.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            country: schema.string(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var country = new Country();
        country.country = fields.country;
        var result = await country.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            country: schema.string(),
            id: schema.number()

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var country = await Country.findOrFail(id);
        country.country = fields.country;
        var result = await country.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var country = await Country.findOrFail(id);
        await country.delete();
        return { message: "The country has been deleted!" };
    }
}

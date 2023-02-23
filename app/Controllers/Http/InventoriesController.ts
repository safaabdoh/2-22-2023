import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Inventorie from 'App/Models/Inventory';
export default class InventoriesController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Inventorie.query().preload('film').preload('store');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Inventorie.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            film_id: schema.number(),
            store_id: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var inventories = new Inventorie();
        inventories.filmId = fields.film_id;
        inventories.storeId = fields.store_id;
        var result = await inventories.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            film_id: schema.number(),
            store_id: schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var inventories = await Inventorie.findOrFail(id);
        inventories.filmId = fields.film_id;
        inventories.storeId = fields.store_id;
        var result = await inventories.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var inventories = await Inventorie.findOrFail(id);
        await inventories.delete();
        return { message: "The Inventorie has been deleted!" };
    }
}

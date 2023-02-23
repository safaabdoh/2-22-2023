import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Models/Store';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class StoresController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Store.query().preload('managerStaff');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();

        var id = ctx.params.id;
        var result = await Store.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            manager_staff_id: schema.number(),
            address_id: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var store = new Store();
        store.managerStaffId = fields.manager_staff_id;
        store.addressId = fields.address_id;
        var result = await store.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            manager_staff_id: schema.number(),
            address_id: schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var store = await Store.findOrFail(id);
        store.managerStaffId = fields.manager_staff_id;
        store.addressId = fields.address_id;
        var result = await store.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var store = await Store.findOrFail(id);
        await store.delete();
        return { message: "The store has been deleted!" };
    }
}

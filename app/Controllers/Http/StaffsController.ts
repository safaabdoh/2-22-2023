import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Staff from 'App/Models/Staff';

export default class StaffsController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Staff.query().preload('address').preload('store');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Staff.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            address_id: schema.number(),
            email: schema.string(),
            store_id: schema.number(),
            active: schema.number(),
            username: schema.string(),
            password: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var staff = new Staff();
        staff.firstName = fields.first_name;
        staff.lastName = fields.last_name;
        staff.addressId = fields.address_id;
        staff.email = fields.email;
        staff.storeId = fields.store_id;
        staff.active = fields.active;
        staff.username = fields.username;
        staff.password = fields.password
        var result = await staff.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            first_name: schema.string(),
            last_name: schema.string(),
            address_id: schema.number(),
            email: schema.string(),
            store_id: schema.number(),
            active: schema.number(),
            username: schema.string(),
            password: schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var staff = await Staff.findOrFail(id);
        staff.firstName = fields.first_name;
        staff.lastName = fields.last_name;
        staff.addressId = fields.address_id;
        staff.email = fields.email;
        staff.storeId = fields.store_id;
        staff.active = fields.active;
        staff.username = fields.username;
        staff.password = fields.password
        var result = await staff.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var staff = await Staff.findOrFail(id);
        await staff.delete();
        return { message: "The staffS has been deleted!" };
    }
}

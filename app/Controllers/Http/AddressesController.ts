import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Address from 'App/Models/Address';

export default class AddressesController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Address.query().preload('city');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Address.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            address: schema.string(),
            address2: schema.string(),
            district: schema.string(),
            city_id: schema.number(),
            postal_code: schema.string(),
            phone: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var address = new Address();
        address.address = fields.address;
        address.address2 = fields.address2;
        address.district = fields.district;
        address.cityId = fields.city_id;
        address.postalCode = fields.postal_code;
        address.phone = fields.phone;
        var result = await address.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            address: schema.string(),
            address2: schema.string(),
            district: schema.string(),
            city_id: schema.number(),
            postal_code: schema.string(),
            phone: schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var address = await Address.findOrFail(id);
        address.address = fields.address;
        address.address2 = fields.address2;
        address.district = fields.district;
        address.cityId = fields.city_id;
        address.postalCode = fields.postal_code;
        address.phone = fields.phone;
        var result = await address.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var address = await Address.findOrFail(id);
        await address.delete();
        return { message: "The Address has been deleted!" };
    }
}

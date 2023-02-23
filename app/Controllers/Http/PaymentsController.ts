import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { DateTime } from 'luxon'
import Payment from 'App/Models/Payment';
export default class PaymentsController {
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var result = await Payment.query().preload('customer').preload('rental').preload('staff');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await Payment.findOrFail(id);
        return result;
    }

    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            customer_id: schema.number(),
            staff_id: schema.number(),
            rental_id: schema.number(),
            amount: schema.number(),
            payment_date: schema.date(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })


        var payment = new Payment();
        payment.customerId = fields.customer_id;
        payment.staffId = fields.staff_id;
        payment.rentalId = fields.rental_id;
        payment.amount = fields.amount;
        payment.paymentDate = fields.payment_date;
        var result = await payment.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            id: schema.number(),
            customer_id: schema.number(),
            staff_id: schema.number(),
            rental_id: schema.number(),
            amount: schema.number(),
            payment_date: schema.date(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var payment = await Payment.findOrFail(id);
        payment.customerId = fields.customer_id;
        payment.staffId = fields.staff_id;
        payment.rentalId = fields.rental_id;
        payment.amount = fields.amount;
        payment.paymentDate = fields.payment_date;
        var result = await payment.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var payment = await Payment.findOrFail(id);
        await payment.delete();
        return { message: "The payment has been deleted!" };
    }
}

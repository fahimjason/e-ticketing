import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if the provided is does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie', global.signin())
        .send({
            title: 'asdf',
            price: 20
        })
        .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
    const id = new mongoose.Types.ObjectId().toString();

    const response = await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: 'asdf',
            price: 20
        })
        .expect(401);
});

it('returns a 401 if the user does not own the ticket', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'Title',
            price: 20
        })
        .expect(201);

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie', global.signin())
        .send({
            title: 'New Title',
            price: 299
        })
        .expect(401);
});

it('returns a 400 if the user provides an invalid title or price', async () => { });

it('update ticket provided valid inputs', async () => { });


import { Publisher, OrderCreatedEvent, Subjects } from '@e-ticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
import { Publisher, Subjects, OrderCancelledEvent } from '@e-ticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
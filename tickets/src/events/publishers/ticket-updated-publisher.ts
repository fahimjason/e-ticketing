import { Publisher, Subjects, TicketUpdatedEvent } from '@e-ticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

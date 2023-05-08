import { Publisher, Subjects, TicketCreatedEvent } from '@e-ticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
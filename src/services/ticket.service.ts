
import Ticket from '../models/ticket.model';
import { CreateTicketDto, UpdateTicketDto } from '../dtos/ticket.dto';
import { CustomError } from '../utils/helpers/customeError.helper';

export class TicketService {
  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    try {
      if (!createTicketDto.boardId || !createTicketDto.description || 
        !createTicketDto.status  || !createTicketDto.title
      ) {
        throw new CustomError('Missing some fields');
      }
      const ticket = await Ticket.create(createTicketDto);
      return ticket;
    } catch (error) {
      throw new CustomError('Error creating ticket', 400);
    }
  }

  async get(id: number): Promise<Ticket | null> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      const ticket = await Ticket.findByPk(id);
      if (!ticket) {
        throw new CustomError('Ticket not found', 404);
      }
      return ticket;
    } catch (error) {
      throw new CustomError('Error retrieving ticket', 500);
    }
  }

  async getAll(): Promise<Ticket[]> {
    try {
      const tickets = await Ticket.findAll();
      if (tickets.length === 0) {
        throw new CustomError('No tickets found', 404);
      }
      return tickets;
    } catch (error) {
      throw new CustomError('Error retrieving ticket', 500);
    }
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket | null> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      
      const ticket = await Ticket.findByPk(id);
      if (!ticket) {
        throw new CustomError('Ticket not found', 404);
      }
      await ticket.update(updateTicketDto);
      return ticket;
    } catch (error) {
      throw new CustomError('Error updating ticket', 500);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      const ticket = await Ticket.findByPk(id);
      if (!ticket) {
        throw new CustomError('Ticket not found', 404);
      }
      await ticket.destroy();
    } catch (error) {
      throw new CustomError('Error deleting ticket', 500);
    }
  }
}

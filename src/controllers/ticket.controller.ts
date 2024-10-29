
import { Request, Response } from 'express';
import { TicketService } from '../services/ticket.service';
import { CreateTicketDto, UpdateTicketDto } from '../dtos/ticket.dto';
import { CustomError } from '../utils/helpers/customeError.helper';

export default class TicketController {
  constructor(private ticketService: TicketService) {}

  async createTicket(req: Request, res: Response): Promise<Response> {
    const createTicketDto: CreateTicketDto = req.body;
    try {
      const ticket = await this.ticketService.create(createTicketDto);
      return res.status(201).json({ ticket, message: 'Ticket created successfully' });
    } catch (error) {
      console.error('Error in TicketController.createTicket:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getTicket(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    try {
      const ticket = await this.ticketService.get(id);
      return res.status(200).json(ticket);
    } catch (error) {
      console.error('Error in TicketController.getTicket:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAllTicket(req: Request, res: Response): Promise<Response> {
    try {
      const ticket = await this.ticketService.getAll();
      return res.status(200).json({ticket: ticket, messages: 'Get Tickets Successfully'});
    } catch (error) {
      console.error('Error in TicketController.getTicket:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateTicket(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const updateTicketDto: UpdateTicketDto = req.body;
    try {
      const updatedTicket = await this.ticketService.update(id, updateTicketDto);
      return res.status(200).json({ updatedTicket, message: 'Ticket updated successfully' });
    } catch (error) {
      console.error('Error in TicketController.updateTicket:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteTicket(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    try {
      await this.ticketService.delete(id);
      return res.status(204).send(); // No Content
    } catch (error) {
      console.error('Error in TicketController.deleteTicket:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

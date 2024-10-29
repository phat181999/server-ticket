import express from 'express';
import TicketController from '../controllers/ticket.controller';
import { TicketService } from '../services/ticket.service';

const ticketRouter = express.Router();
const ticketService = new TicketService();
const ticketController = new TicketController(ticketService);
// @ts-ignore
ticketRouter.post('/create-ticket', (req, res) => ticketController.createTicket(req, res));
// @ts-ignore
ticketRouter.patch('/:id', (req, res) => ticketController.updateTicket(req, res));
// @ts-ignore
ticketRouter.get('/:id', (req, res) => ticketController.getTicket(req, res));
// @ts-ignore
ticketRouter.get('', (req, res) => ticketController.getAllTicket(req, res));
// @ts-ignore
ticketRouter.delete('/:id', (req, res) => ticketController.deleteTicket(req, res));

export { ticketRouter };

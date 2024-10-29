import express from 'express';
import { ticketRouter } from './ticker.router';
import { versionRouter } from './version.router';
import { boardRouter } from './board.router';
import { productRouter } from './product.router';
const rootRouter = express.Router();

rootRouter.use('/ticket',ticketRouter);
rootRouter.use('/board',boardRouter);
rootRouter.use('/version',versionRouter);
rootRouter.use('/product',productRouter);

export { rootRouter };
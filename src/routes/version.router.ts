import express from 'express';
import VersionController from '../controllers/version.controller';
import { VersionService } from '../services/version.service';

const versionRouter = express.Router();
const versionService = new VersionService();
const versionController = new VersionController(versionService);
// @ts-ignore

versionRouter.post('/create-version', (req, res) => versionController.createVersion(req, res));

// @ts-ignore
versionRouter.patch('/update-version/:id', (req, res) => versionController.updateVersion(req, res));

// @ts-ignore
versionRouter.get('/get-version/:id', (req, res) => versionController.getVersion(req, res));

// @ts-ignore
versionRouter.get('/get-version', (req, res) => versionController.getAllVersion(req, res));

// @ts-ignore
versionRouter.delete('/delete-version/:id', (req, res) => versionController.deleteVersion(req, res));


export { versionRouter };

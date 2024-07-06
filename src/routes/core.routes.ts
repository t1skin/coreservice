import { CoreController } from '../controllers/core.controller';
import { Router } from 'express';

const router = Router();
const coreController = new CoreController();

router.get('/get_auth_url', (req, res) => coreController.getAuthUrl(req, res));
router.get('/get_auth_token', (req, res) => coreController.getAuthToken(req, res));

export default router;
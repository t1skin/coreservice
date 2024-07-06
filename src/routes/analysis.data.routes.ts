import { CoreController } from '../controllers/core.controller';
import { Router } from 'express';

const router = Router();
const coreController = new CoreController();

router.get('/fetch_and_store_data', coreController.fetchAndStoreData);

export default router;
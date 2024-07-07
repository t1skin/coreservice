import { CoreController } from '../controllers/core.controller';
import { Router } from 'express';

const router = Router();
const coreController = new CoreController();

router.post('/analyze', coreController.analyzeData);
router.get('/analysis/:analysisId', coreController.getAnalysisById);
router.get('/fetch_and_store_data', coreController.fetchAndStoreData);
router.get('/visualize/:analysisId', coreController.generateVisualisation);

export default router;
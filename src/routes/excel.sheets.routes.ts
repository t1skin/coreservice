import { CoreController } from '../controllers/core.controller';
import { Router } from 'express';
import multer from 'multer';

const upload = multer();

const router = Router();
const coreController = new CoreController();

router.get('/get_sheets', (req, res) => coreController.getSheets(req, res));
router.post('/create_table', (req, res) => coreController.createTable(req, res));
router.post('/create_session', (req, res) => coreController.createSession(req, res));
router.post('/create_worksheet', (req, res) => coreController.createWorksheet(req, res));
router.get('/get_table_data/:tableName', (req, res) => coreController.getTableData(req, res));

router.post('/add_data_to_table/:tableName', upload.single('file'),
 (req, res) => coreController.addDataToTable(req, res)
);

router.delete('/delete_table/:tableName', (req, res) => coreController.deleteTable(req, res));
router.delete('/delete_worksheet/:sheetName', (req, res) => coreController.deleteWorksheet(req, res));
router.delete('/delete_data_from_table/:tableName', coreController.deleteDataFromTable);

export default router;
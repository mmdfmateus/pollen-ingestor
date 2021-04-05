import Router from 'express';
import multer from 'multer'
import { handleUploadCsvRequest } from './controllers/pollensController.js';

const router = new Router();
const upload = multer({ dest: 'tmp' });

router.post('/pollens', upload.single('file'), async (req, res) => await handleUploadCsvRequest(req, res));

export default router;
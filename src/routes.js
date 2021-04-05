import Router from 'express';
import multer from 'multer'
import { handleUploadCsvRequest } from './controllers/uploadController.js';

const router = new Router();
const upload = multer({ dest: 'tmp' });

router.post('/upload-csv', upload.single('file'), (req, res) => handleUploadCsvRequest(req, res));

export default router;
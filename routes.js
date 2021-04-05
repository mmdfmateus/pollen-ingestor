import Router from 'express';
import fs from 'fs'
import csv from 'csv-parser';
import multer from 'multer'

const router = new Router();
const upload = multer({ dest: 'tmp/csv/' });

router.post('/upload-csv', upload.single('file'), function (req, res) {
    const fileRows = [];

    fs.createReadStream(req.file.path)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => fileRows.push(data))
        .on('end', () => {
            // console.log(fileRows)
            fs.unlinkSync(req.file.path);   // remove temp file
            res.send(fileRows);
        });

});

export default router;
import csv from 'csv-parser';
import fs from 'fs'
import express, { json } from 'express'
import multer from 'multer'

const upload = multer({ dest: 'tmp/csv/' });
const app = express();
const router = new express.Router();
const port = 9000

router.post('/', upload.single('file'), function (req, res) {
    const fileRows = [];
    console.log('req.file.path');
    console.log(req.file.path);

    fs.createReadStream(req.file.path)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => fileRows.push(data))
        .on('end', () => {
            console.log(fileRows)
            fs.unlinkSync(req.file.path);   // remove temp file
        });

    res.send({ result: 'ok' });
});

app.use(json());
app.use('/upload-csv', router);

app.listen(port, function () {
    console.log('Express server listening on ', port);
});
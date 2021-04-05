import fs from 'fs'
import csv from 'csv-parser';

export const handleUploadCsvRequest = (req, res) => {
    const fileRows = [];

    fs.createReadStream(req.file.path)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => fileRows.push(data))
        .on('end', () => {
            fs.unlinkSync(req.file.path);   // remove temp file
            res.send(fileRows);
        });

};

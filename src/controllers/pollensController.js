import fs from 'fs'
import csv from 'csv-parser';
import { postDataToService } from '../services/mainServerService.js';

export const handleUploadCsvRequest = async (req, res) => {
    try {
        const fileRows = [];
        
        fs.createReadStream(req.file.path)
            .pipe(csv({ separator: ';' }))
            .on('data', (data) => fileRows.push(data))
            .on('end', async () => {
                fs.unlinkSync(req.file.path);   // remove temp file
                await postDataToService(fileRows);
                res.send(fileRows);
            });
    } catch (error) {
        res.send({ status: '400', error: 'Some error ocurred'});
    }
};

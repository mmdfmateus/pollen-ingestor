import fs from 'fs'
import csv from 'csv-parser';
import { postDataToService } from '../services/mainServerService.js';
import { log } from '../services/logsService.js';

export const handleUploadCsvRequest = async (req, res) => {
    try {
        const fileRows = [];

        fs.createReadStream(req.file.path)
            .pipe(csv({ separator: ';' }))
            .on('data', (data) => fileRows.push(data))
            .on('end', async () => {
                fs.unlinkSync(req.file.path);   // remove temp file
                await postDataToService(fileRows, req.query['city_code']);
                await log({ message: "Send data to main server successfully" });
                res.send(request);
            });
    } catch (error) {
        const response = { status: '400', error: `Some error ocurred sending data to main server: ${error.message}` };
        await log(response);
        res.send(response);
    }
};

import axios from 'axios';

const getInstance = () => axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 10000
});

export const log = async (data) => {
    await getInstance().post('/debug.test', { from: 'pollen-ingestor', ...data });
}
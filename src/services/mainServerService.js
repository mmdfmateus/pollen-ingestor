import axios from 'axios';

const getInstance = () => axios.create({
    baseURL: 'https://ennizi6amvyqidx.m.pipedream.net',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const postDataToService = async (data) => {
    await getInstance().post('/api/v1/record', data);
    return true;
}

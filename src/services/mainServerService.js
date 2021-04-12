import axios from 'axios';

const getInstance = () => axios.create({
    baseURL: 'http://ec2-34-201-114-94.compute-1.amazonaws.com:3000',
    timeout: 10000
});

export const postDataToService = async (data, cityCode) => {
    try{
        const path = cityCode ? `/api/v1/record?ingestor_code=${cityCode}` : `/api/v1/record`;
        const response = await getInstance().post(path, data);
        console.log(response.data);
        return response;
    }
    catch(err){
        console.error(err);
    }
}

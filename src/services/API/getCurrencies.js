import axios from 'axios';

const getCurrencies = async () => {
    const options = {
        method: 'GET',
        url: 'http://data.fixer.io/api/latest?access_key=07d2d685b7ee42d73065045e352cc2db',
    };
    try {
        const res = await axios.request(options);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrencies;

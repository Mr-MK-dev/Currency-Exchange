import axios from 'axios';

const conversion = (amount, from, to) => {
    const options = {
        method: 'POST',
        url: `http://data.fixer.io/api/convert?access_key=07d2d685b7ee42d73065045e352cc2db&from=${from}&to=${to}&amount=${amount}`,
    };
    try {
        const res = axios.request(options);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export default conversion;

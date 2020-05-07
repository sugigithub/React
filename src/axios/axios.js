import axios from 'axios';

// const instance = axios.create({
//     baseURL:'http://demo3372689.mockable.io'
// });

const instance = axios.create({
    baseURL:'https://recipie-react.firebaseio.com'
});

export default instance;
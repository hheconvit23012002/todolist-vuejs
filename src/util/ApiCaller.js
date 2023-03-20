import API_URL from '../constans/ConfigApi'
import axios from 'axios'

export default function ApiCaller(endpoin, method = 'GET',body){
    // console.log(API_URL);
    // console.log(method);
    // console.log(body);
    return axios({
        method : method,
        url : API_URL + endpoin,
        data : body,
    })
    .catch(err => console.error(err))
}
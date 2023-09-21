import {APIRequestParam} from "../type/commonType";
import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        'Access-Control-Allow-origin' : '*',
        'Content-Type' : 'application/json'
    }
})

export const makeAxiosRequest = async <T> ({url, method = 'GET', body = null, headers = {}}: APIRequestParam) => {

}
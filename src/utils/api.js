import axios from "axios";
import {Config} from "../config";
import {StorageService} from "../services/storage.service";

let baseURL;

switch (process.env.REACT_APP_ENV) {
    case 'dev':
        baseURL = Config.host.dev;
        break;

    case 'stage':
        baseURL = Config.host.stage;
        break;

    case 'prod':
        baseURL = Config.host.prod;
        break;

    default:
        baseURL = Config.host.dev;
}

const _axios = axios.create({
    baseURL: baseURL,
    responseType: "json"
})

_axios.interceptors.request
    .use((config) => {
            let disableInterceptor = [
                'login'
            ];

            if (disableInterceptor.includes(config.url)) {
                return config;
            }

            const token = StorageService.getToken();
            console.log('interceptors', token)
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            config.headers['Content-Type'] = 'application/json';

            return config;
        },
        error => {
            Promise.reject(error)
        });

export default _axios;
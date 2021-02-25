import API from "./../utils/api";

export class SystemService {
    static getPreliminaryParams = () => {
        return API.get('/system/preliminaryParams');
    };
}

import API from "./../utils/api";

export class NavigationMenuService {
    static getMainList = () => {
        return API.get('/menu/getMainList');
    };
}

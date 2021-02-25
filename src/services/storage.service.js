export class StorageService {
    static storageName = 'localStorage' || 'sessionStorage';

    static setAuth(data) {
        window[this.storageName].setItem('auth', data);

        return this;
    }

    static getAuth() {
        return window[this.storageName].getItem('auth');
    }

    static removeAuth() {
        window[this.storageName].removeItem('auth');

        return this;
    }

    static getItemByKey(key) {
        window[this.storageName].getItem(key);

        return this;
    }

    static setItem(key, data) {
        window[this.storageName].setItem(key, data);

        return this;
    }

    getDataByKey(key) {
        return window[this.storageName].getItem(key);
    }


    static removeToken() {
        window[this.storageName].removeItem('token');

        return this;
    }

    static setToken(data) {
        window[this.storageName].setItem('token', data);

        return this;
    }


    static getToken() {
        return window[this.storageName].getItem('token');
    }

}

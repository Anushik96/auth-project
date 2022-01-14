import axios from 'axios';
import {Registration} from './types'
import {Login} from './types'

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login(param :Login) {
        return axios
            .post(API_URL + 'signin', param)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(param: Registration) {
        return axios.post(API_URL + 'signup', param);
    }
}

export default new AuthService();
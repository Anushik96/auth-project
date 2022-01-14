import {ActionContext, ActionTree} from 'vuex'
import {Mutations, MutationType} from './mutations'
import {state, State} from './state'
import AuthService from '@/services/auth/AuthService';

export enum ActionTypes {
    login = 'LOGIN',
    signOut = 'SIGN_OUT',
    register = 'REGISTER',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[0]
    ): ReturnType<Mutations[K]>;
}
export type Actions = {
    [ActionTypes.login](context: ActionAugments, data: any):  Promise<any>;
    [ActionTypes.signOut](context: ActionAugments): void;
    [ActionTypes.register](context: ActionAugments, data: any):  Promise<any>;
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.login]({commit}, data) {
        return AuthService.login(data).then(
            user => {
                commit(MutationType.loginSuccess, user);
                return Promise.resolve(user);
            },
            error => {
                commit(MutationType.loginFailure, state);
                const message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                return Promise.reject(message);
            },
        )},

    async [ActionTypes.signOut]({commit}) {
        AuthService.logout();
        commit(MutationType.logout, state);
    },
    async [ActionTypes.register]({commit}, data) {
        return AuthService.register(data).then(
            response => {
              commit(MutationType.registerSuccess, state);
              return Promise.resolve(response.data);
            },
            error => {
                commit(MutationType.registerFailure, state);
                const message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                return Promise.reject(message);
            }
        );
    }
};
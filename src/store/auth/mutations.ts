import { MutationTree } from 'vuex'
import { State, User } from './state'

export enum MutationType {
    loginSuccess = 'LOGIN_SUCCESS',
    loginFailure = 'LOGIN_FAILURE',
    logout = 'LOGOUT',
    registerSuccess = 'REGISTER_SUCCESS',
    registerFailure = 'REGISTER_FAILURE',
}

export type Mutations = {
    [MutationType.loginSuccess](state: State, user: User): void;
    [MutationType.loginFailure](state: State): void;
    [MutationType.logout](state: State): void;
    [MutationType.registerSuccess](state: State): void;
    [MutationType.registerFailure](state: State): void;
}


export const mutations: MutationTree<State> & Mutations = {
    [MutationType.loginSuccess](state, user) {
        state.status.loggedIn = true;
        state.user = user;
    },
    [MutationType.loginFailure](state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    [MutationType.logout](state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    [MutationType.registerSuccess](state) {
        state.status.loggedIn = false;
    },
    [MutationType.registerFailure](state) {
        state.status.loggedIn = false;
    },
};
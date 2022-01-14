import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
    isLoggedIn(state: State): boolean;
}

export const getters: GetterTree<State, State> & Getters = {
    isLoggedIn(state) {
        return state.status.loggedIn
        // return true
    },
};
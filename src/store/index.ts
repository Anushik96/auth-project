import {
    createStore,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
} from 'vuex'
import { State, state } from './auth/state'
import { Mutations, mutations } from './auth/mutations'
import { Actions, actions } from './auth/action'
import { Getters, getters } from './auth/getters'

export const store = createStore<State>({
    state,
    mutations,
    actions,
    getters
});
export function useStore() {
    return store as Store
}
export type Store = Omit<VuexStore<State>,
    'getters' | 'commit' | 'dispatch'
    > & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[0]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    };
}


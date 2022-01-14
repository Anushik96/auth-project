import {Store} from "@/store";

interface typeFor {
    next: any,
    store: Store
}
type Roles = Array<string>;
const roles: Roles = ['user','admin'];
export default function role ({ next, store}: typeFor){
    if(!store.getters.isLoggedIn){
        return next({
            name: 'dashboard'
    })
}else {
        if (store.state.user !== next.meta.role) {
            return next()
        }
    }

    return next()
}
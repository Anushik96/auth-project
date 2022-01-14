import {Store} from "@/store";

interface typeFor {
    next: any,
    store: Store
}
export default function guest ({ next, store}: typeFor){
    if(store.getters.isLoggedIn){
        return next({
            name: 'home'
        })
    }

    return next()
}
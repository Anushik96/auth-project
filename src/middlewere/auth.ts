import {Store} from "@/store";

interface typeFor {
    next: any,
    store: Store
}

export default function auth ({ next, store }: typeFor){
    if(!store.getters.isLoggedIn){
        return next({
            name: 'login'
        })
    }

    return next()
}
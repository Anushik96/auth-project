const storedUser = localStorage.getItem('user');

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    gender: string;
};
export type State = {
    status: any;
    user: User | any;
};
export const state: State = {
    status: storedUser ? { loggedIn: true } : { loggedIn: false },
    user: storedUser ? JSON.parse(storedUser) : null,
};
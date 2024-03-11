const key = 'user';

export const userService = {
    read: () => {
        const val = localStorage.getItem(key);
        return JSON.parse(val);
    },
    save: (payload) => {
        localStorage.setItem(key, JSON.stringify(payload));
    },
    remove: () => {
        localStorage.removeItem(key);
    }
}
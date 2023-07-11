export const isObjectFalsy = (object: {[key:string]: any} | undefined | null) => {
    if (!object) return true;
    if (Object.values(object).every(value => !value)) {
        return true
    }
    return Object.keys(object).length === 0;
};
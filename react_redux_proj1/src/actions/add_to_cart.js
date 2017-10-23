export const addToCart = (item) => {
    console.log('show item add: ', item);
    return {
        type: 'add',
        item
    }
}
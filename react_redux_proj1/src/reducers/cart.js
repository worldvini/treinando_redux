export default (state = [], payload) => {
    console.info('vendo payload: ', payload)
    switch (payload.type) {
        case 'add':
            return [...state, payload.item]
        default:
            return state;
    }
}
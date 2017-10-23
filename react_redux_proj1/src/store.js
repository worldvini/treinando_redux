import { createStore } from 'redux';
import rootReduces from './reducers';

export default (initialState) => {
    return createStore(rootReduces, initialState)
}
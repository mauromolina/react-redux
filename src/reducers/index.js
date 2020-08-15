import { combineReducers } from 'redux';
import reducerProducts from './reducerProducts';
import reducerAlerts from './reducerAlert';

export default combineReducers({
    products: reducerProducts,
    alerts: reducerAlerts
});
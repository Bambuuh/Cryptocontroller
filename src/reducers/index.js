import { combineReducers } from 'redux'

import navReducer from './navReducer'
import currencyReducer from './currencyReducer'

export default AppReducer = combineReducers({
    nav: navReducer,
    currencies: currencyReducer
})
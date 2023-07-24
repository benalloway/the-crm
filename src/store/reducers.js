import { combineReducers } from 'redux'
import customer from '../features/Customers/reducers'
// import habitat from '../features/habitat/reducers'

const rootReducer = combineReducers({
    customer,
    // region
})

export default rootReducer


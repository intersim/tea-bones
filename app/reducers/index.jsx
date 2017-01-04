import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,  
  teas: require('./teas').default,
})

export default rootReducer

import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
const  rootRudecer = combineReducers({
    filter:filter,todos:todos
})
export default rootRudecer
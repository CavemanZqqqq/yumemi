import {combineReducers} from 'redux'

import options from './options'
import city from './city'


//合并并导出reducer
export default combineReducers({
    city
})
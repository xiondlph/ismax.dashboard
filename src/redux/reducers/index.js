/**
 * Тоска входа для редюсеров
 */

import { combineReducers } from 'redux'
import dashboard from './dashboard'
import profile from './profile'

export default combineReducers({
    dashboard,
    profile
})
/**
 * Тоска входа для редюсеров
 */

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import dashboard from './dashboard'
import profile from './profile'

export default combineReducers({
    form,
    dashboard,
    profile
})
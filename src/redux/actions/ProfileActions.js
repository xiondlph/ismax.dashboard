/**
 * Набор действий с данными профиля
 */

import { DASHBOARD_SHOW_NOTICE } from '../../constants/Dashboard'

import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS
} from '../../constants/Profile'

export function getProfile() {

    return (dispatch) => {
        dispatch({
            type: PROFILE_REQUEST
        })

        return fetch('/api/profile', { credentials: 'include' })
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch({
                    type: PROFILE_SUCCESS,
                    payload: data.profile
                })
            })
            .catch(err => {
                dispatch({
                    type: DASHBOARD_SHOW_NOTICE,
                    payload: err.message
                })
            })
    }
}
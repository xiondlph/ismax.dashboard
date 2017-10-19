/**
 * Редюсер действия с данными профиля
 */

import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS
} from '../../constants/Profile'

const initialState = {}

export default function profile(state = initialState, action) {
    const profile = action.payload
    switch (action.type) {
        case PROFILE_REQUEST:
            return { ...state, fetching: true }
        case PROFILE_SUCCESS:
            return { ...state, fetching: false, ...profile }

        default:
            return state;
    }
}
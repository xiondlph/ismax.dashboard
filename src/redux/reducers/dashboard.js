/**
 * Редюсер действия для панели
 */

import {
    DASHBOARD_SHOW_NOTICE,
    DASHBOARD_HIDE_NOTICE,
    DASHBOARD_SET_SIDEBAR_STATE,
    DASHBOARD_SIDEBAR_STATE_FULL
} from '../../constants/Dashboard'

const initialState = {
    sidebar: DASHBOARD_SIDEBAR_STATE_FULL
}

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_SET_SIDEBAR_STATE:
            return { ...state, sidebar: action.payload }

        case DASHBOARD_SHOW_NOTICE:
            return { ...state, notice: true, noticeMessage: action.payload }

        case DASHBOARD_HIDE_NOTICE:
            return { ...state, notice: false, noticeMessage: '' }

        default:
            return state;
    }
}
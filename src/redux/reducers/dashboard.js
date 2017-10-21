/**
 * Редюсер действия для панели
 */

import {
    DASHBOARD_SHOW_NOTICE,
    DASHBOARD_HIDE_NOTICE,
    DASHBOARD_SET_SIDEBAR_STATE,
    DASHBOARD_SET_MOBILE_SIDEBAR_STATE,
    DASHBOARD_SIDEBAR_STATE_EXPANDED,
    DASHBOARD_SIDEBAR_STATE_COLLAPSED
} from '../../constants/Dashboard'

const initialState = {
    sidebar: DASHBOARD_SIDEBAR_STATE_EXPANDED,
    mobileSidebar: DASHBOARD_SIDEBAR_STATE_COLLAPSED
}

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_SET_SIDEBAR_STATE:
            return { ...state, sidebar: action.payload }

        case DASHBOARD_SET_MOBILE_SIDEBAR_STATE:
            return { ...state, mobileSidebar: action.payload }

        case DASHBOARD_SHOW_NOTICE:
            return { ...state, notice: true, noticeMessage: action.payload }

        case DASHBOARD_HIDE_NOTICE:
            return { ...state, notice: false, noticeMessage: '' }

        default:
            return state;
    }
}
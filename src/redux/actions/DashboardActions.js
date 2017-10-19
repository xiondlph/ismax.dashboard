/**
 * Набор действий для панели
 */

import {
    DASHBOARD_HIDE_NOTICE,
    DASHBOARD_SET_SIDEBAR_STATE
} from '../../constants/Dashboard'

export const setSidebarState = sidebarState => {

    return {
        type: DASHBOARD_SET_SIDEBAR_STATE,
        payload: sidebarState
    }

}

export const hideNotice = () => {
    return {
        type: DASHBOARD_HIDE_NOTICE
    }
}
import * as actions from '../DashboardActions'
import {
    DASHBOARD_HIDE_NOTICE,
    DASHBOARD_SET_SIDEBAR_STATE,
    DASHBOARD_SET_MOBILE_SIDEBAR_STATE
} from '../../../constants/Dashboard'

describe('Dashboard ctions', () => {
    it('setSidebarState', () => {
        const
            payload = 'EXPANDED',
            expectedAction = {
                type: DASHBOARD_SET_SIDEBAR_STATE,
                payload
            }

        expect(actions.setSidebarState(payload)).toEqual(expectedAction)
    })

    it('setMobileSidebarState', () => {
        const
            payload = 'EXPANDED',
            expectedAction = {
                type: DASHBOARD_SET_MOBILE_SIDEBAR_STATE,
                payload
            }

        expect(actions.setMobileSidebarState(payload)).toEqual(expectedAction)
    })

    it('hideNotice', () => {
        const expectedAction = {
            type: DASHBOARD_HIDE_NOTICE
        }

        expect(actions.hideNotice()).toEqual(expectedAction)
    })
})
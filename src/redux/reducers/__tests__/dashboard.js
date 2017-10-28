import reducer from '../dashboard'
import {
    DASHBOARD_SHOW_NOTICE,
    DASHBOARD_HIDE_NOTICE,
    DASHBOARD_SET_SIDEBAR_STATE,
    DASHBOARD_SET_MOBILE_SIDEBAR_STATE,
    DASHBOARD_SIDEBAR_STATE_EXPANDED,
    DASHBOARD_SIDEBAR_STATE_COLLAPSED,
    DASHBOARD_NOTICE_VISIBLE,
    DASHBOARD_NOTICE_HIDDEN,
} from '../../../constants/Dashboard'

describe('Dashboard reducer', () => {
    it('Инициализированный state', () => {
        const
            state = undefined,
            action = {};

        expect(reducer(state, action)).toEqual({
            sidebar: 'EXPANDED',
            mobileSidebar: 'COLLAPSED',
            notice: false,
            noticeMessage: ''
        })
    })

    it('Обработка DASHBOARD_SET_SIDEBAR_STATE', () => {
        const
            state = {},
            action = {
                type: DASHBOARD_SET_SIDEBAR_STATE,
                payload: DASHBOARD_SIDEBAR_STATE_COLLAPSED
            };

        expect(reducer(state, action)).toEqual({ sidebar: DASHBOARD_SIDEBAR_STATE_COLLAPSED })
    })

    it('Обработка DASHBOARD_SET_MOBILE_SIDEBAR_STATE', () => {
        const
            state = {},
            action = {
                type: DASHBOARD_SET_MOBILE_SIDEBAR_STATE,
                payload: DASHBOARD_SIDEBAR_STATE_EXPANDED
            };

        expect(reducer(state, action)).toEqual({ mobileSidebar: DASHBOARD_SIDEBAR_STATE_EXPANDED })
    })

    it('Обработка DASHBOARD_SHOW_NOTICE', () => {
        const
            state = {},
            action = {
                type: DASHBOARD_SHOW_NOTICE,
                payload: 'test message'
            };

        expect(reducer(state, action)).toEqual({ notice: DASHBOARD_NOTICE_VISIBLE, noticeMessage: 'test message' })
    })

    it('Обработка DASHBOARD_HIDE_NOTICE', () => {
        const
            state = {},
            action = {
                type: DASHBOARD_HIDE_NOTICE
            };

        expect(reducer(state, action)).toEqual({ notice: DASHBOARD_NOTICE_HIDDEN, noticeMessage: '' })
    })
})

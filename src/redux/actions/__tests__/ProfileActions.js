import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../ProfileActions'

import { DASHBOARD_SHOW_NOTICE } from '../../../constants/Dashboard'

import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS
} from '../../../constants/Profile'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Profile аctions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('getProfile', () => {

        // Замокали fetch запрос
        fetchMock.getOnce('/api/profile',{
            body: {
                profile: {
                    email: 'shukhrat@ismax.ru'
                }
            },
            headers: { 'content-type': 'application/json' }
        })

        const
            expectedActions = [
                { type: PROFILE_REQUEST },
                { type: PROFILE_SUCCESS, payload: {
                    email: 'shukhrat@ismax.ru'
                }}
            ]

        const store = mockStore({})

        return store.dispatch(actions.getProfile()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
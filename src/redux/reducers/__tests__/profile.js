import reducer from '../profile'
import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS
} from '../../../constants/Profile'

describe('Profile reducer', () => {
    it('Инициализированный state', () => {
        const
            state = undefined,
            action = {};

        expect(reducer(state, action)).toEqual({})
    })

    it('Обработка PROFILE_REQUEST', () => {
        const
            state = {},
            action = {
                type: PROFILE_REQUEST
            };

        expect(reducer(state, action)).toEqual({ fetching: true })
    })

    it('Обработка PROFILE_SUCCESS', () => {
        const
            profile = {
                email: 'user@email.com'
            },
            state = {},
            action = {
                type: PROFILE_SUCCESS,
                payload: profile
            };

        expect(reducer(state, action)).toEqual({ email: profile.email, fetching: false })
    })
})

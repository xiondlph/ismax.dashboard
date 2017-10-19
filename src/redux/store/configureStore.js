/**
 * Настройка хранилища redux
 */

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const
        logger = createLogger(),
        store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk, logger)
        )

    return store
}
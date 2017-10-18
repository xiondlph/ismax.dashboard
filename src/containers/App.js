import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/store/configureStore'
import Routers from '../routes'

const store = configureStore()

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routers/>
            </Provider>
        )
    }
}
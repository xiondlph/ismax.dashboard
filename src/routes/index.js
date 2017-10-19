/**
 * Настройки маршрутизиции (список маршрутов)
 */

import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import * as Pages from '../Pages'

export default class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Dashboard>
                    <Route exact path='/' component={Pages.Profile} />
                    <Route path='/payment' component={Pages.Payment} />
                    <Route path='/referrals' component={Pages.Referrals} />
                </Dashboard>
            </HashRouter>
        )
    }
}

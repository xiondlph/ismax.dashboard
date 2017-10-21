/**
 * Контейнер боковой навигационной панели (слева)
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import {
    DASHBOARD_SIDEBAR_STATE_COLLAPSED
} from '../../constants/Dashboard'

import './Sidebar.scss'

export default class Sidebar extends Component {

    render() {
        const
            { sidebar } = this.props,
            collapsed = sidebar === DASHBOARD_SIDEBAR_STATE_COLLAPSED

        return (
            <div className={classNames({
                'dashboard-sidebar': true,
                'dashboard-sidebar_collapsed': collapsed
            })}>
                <div className='dashboard-sidebar-menu'>
                    <NavLink to='/' activeClassName='dashboard-sidebar-menu-item_active' exact className='dashboard-sidebar-menu-item'>
                        <span className='dashboard-sidebar-menu-item-icon fa fa-user' />
                        <div className='dashboard-sidebar-menu-item-text'>Профиль</div>
                    </NavLink>
                    <NavLink to='/payment' activeClassName='dashboard-sidebar-menu-item_active' className='dashboard-sidebar-menu-item'>
                        <span className='dashboard-sidebar-menu-item-icon fa fa-credit-card' />
                        <div className='dashboard-sidebar-menu-item-text'>Оплата</div>
                    </NavLink>
                    <NavLink to='/referrals' activeClassName='dashboard-sidebar-menu-item_active' className='dashboard-sidebar-menu-item'>
                        <span className='dashboard-sidebar-menu-item-icon fa fa-users' />
                        <div className='dashboard-sidebar-menu-item-text'>Рефералы</div>
                    </NavLink>
                    <div className='dashboard-sidebar-menu-item'>
                        <span className='dashboard-sidebar-menu-item-icon fa fa-question' />
                        <span className='dashboard-sidebar-menu-item-text'>Помощь</span>
                    </div>
                    <div className='dashboard-sidebar-menu-item'>
                        <span className='dashboard-sidebar-menu-item-icon fa fa-sign-out' />
                        <span className='dashboard-sidebar-menu-item-text'>Выход</span>
                    </div>
                </div>
            </div>
        )
    }
}

Sidebar.propTypes = {
    sidebar: PropTypes.string.isRequired
}
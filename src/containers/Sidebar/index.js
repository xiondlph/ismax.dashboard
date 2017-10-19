/**
 * Контейнер боковой навигационной панели (слева)
 */

import React, { Component } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import './Sidebar.scss'

export default class Sidebar extends Component {
    render() {
        const { sidebar } = this.props

        return (
            <div className={classNames('dashboard-main-sidebar', `dashboard-main-sidebar_${sidebar}`)}>
                <div className='dashboard-main-sidebar-menu'>
                    <NavLink to='/' activeClassName='dashboard-main-sidebar-menu-item_active' exact className='dashboard-main-sidebar-menu-item'>
                        <span className='fa fa-user'></span>
                        <div className='dashboard-main-sidebar-menu-item-text'>Профиль</div>
                    </NavLink>
                    <NavLink to='/payment' activeClassName='dashboard-main-sidebar-menu-item_active' className='dashboard-main-sidebar-menu-item'>
                        <span className='fa fa-credit-card'></span>
                        <div className='dashboard-main-sidebar-menu-item-text'>Оплата</div>
                    </NavLink>
                    <NavLink to='/referrals' activeClassName='dashboard-main-sidebar-menu-item_active' className='dashboard-main-sidebar-menu-item'>
                        <span className='fa fa-users'></span>
                        <div className='dashboard-main-sidebar-menu-item-text'>Рефералы</div>
                    </NavLink>
                    <div className='dashboard-main-sidebar-menu-item'>
                        <span className='fa fa-question'></span>
                        <span className='dashboard-main-sidebar-menu-item-text'>Помощь</span>
                    </div>
                    <div className='dashboard-main-sidebar-menu-item'>
                        <span className='fa fa-sign-out'></span>
                        <span className='dashboard-main-sidebar-menu-item-text'>Выход</span>
                    </div>
                </div>
            </div>
        )
    }
}
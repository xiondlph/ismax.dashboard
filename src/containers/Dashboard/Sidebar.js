import React, { Component } from 'react'
import classNames from 'classnames'

import './Sidebar.scss'

export default class Sidebar extends Component {
    render() {
        const { sidebar } = this.props

        return <div className={classNames('dashboard-main-sidebar', `dashboard-main-sidebar_${sidebar}`)}>
            <ul className='dashboard-main-sidebar-menu'>
                <li className='dashboard-main-sidebar-menu-item dashboard-main-sidebar-menu-item_active'>
                    <span className='fa fa-user'></span>
                    <span className='dashboard-main-sidebar-menu-item-text'>Профиль</span>
                </li>
                <li className='dashboard-main-sidebar-menu-item'>
                    <span className='fa fa-credit-card'></span>
                    <span className='dashboard-main-sidebar-menu-item-text'>Оплата</span>
                </li>
                <li className='dashboard-main-sidebar-menu-item'>
                    <span className='fa fa-users'></span>
                    <span className='dashboard-main-sidebar-menu-item-text'>Рефералы</span>
                </li>
                <li className='dashboard-main-sidebar-menu-item'>
                    <span className='fa fa-question'></span>
                    <span className='dashboard-main-sidebar-menu-item-text'>Помощь</span>
                </li>
                <li className='dashboard-main-sidebar-menu-item'>
                    <span className='fa fa-sign-out'></span>
                    <span className='dashboard-main-sidebar-menu-item-text'>Выход</span>
                </li>
            </ul>
        </div>
    }
}
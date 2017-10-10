import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return <div className='app'>
            <div className='dashboard'>
                <div className='dashboard-header'>
                    <div className='dashboard-header-logo'></div>
                    <div className='dashboard-header-toolbar'></div>
                </div>
                <div className='dashboard-main'>
                    <div className='dashboard-main-wrap'>
                        <div className='dashboard-main-sidebar'>
                            <ul className='dashboard-main-sidebar-menu'>
                                <li className='dashboard-main-sidebar-menu-item'>
                                    <span className='fa fa-user'></span>Профиль
                                </li>
                                <li className='dashboard-main-sidebar-menu-item'>
                                    <span className='fa fa-credit-card'></span>Оплата
                                </li>
                                <li className='dashboard-main-sidebar-menu-item'>
                                    <span className='fa fa-users'></span>Рефералы
                                </li>
                                <li className='dashboard-main-sidebar-menu-item'>
                                    <span className='fa fa-question'></span>Помощь
                                </li>
                                <li className='dashboard-main-sidebar-menu-item'>
                                    <span className='fa fa-sign-out'></span>Выход
                                </li>
                            </ul>
                        </div>
                        <div className='dashboard-main-content'></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
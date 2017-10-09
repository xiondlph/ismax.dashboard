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
                                <li className='dashboard-main-sidebar-menu-item fa fa-camera-retro fa-lg'>Профиль</li>
                                <li className='dashboard-main-sidebar-menu-item'>Оплата</li>
                                <li className='dashboard-main-sidebar-menu-item'>Рефералы</li>
                                <li className='dashboard-main-sidebar-menu-item'>Помощь</li>
                                <li className='dashboard-main-sidebar-menu-item'>Выход</li>
                            </ul>
                        </div>
                        <div className='dashboard-main-content'></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
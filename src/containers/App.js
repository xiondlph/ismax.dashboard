import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return <div className='app'>
            <div className='dashboard'>
                <div className='dashboard-header'>
                    <div className='dashboard-header-logo'></div>
                    <div className='dashboard-header-toolbar'></div>
                </div>
                <div className='dashboard-body'>
                    <div className='dashboard-body-wrap'>
                        <div className='dashboard-body-nav'>
                            <ul className='dashboard-body-nav-menu'>
                                <li className='dashboard-body-nav-menu-item'>Профиль</li>
                                <li className='dashboard-body-nav-menu-item'>Оплата</li>
                                <li className='dashboard-body-nav-menu-item'>Рефералы</li>
                                <li className='dashboard-body-nav-menu-item'>Помощь</li>
                                <li className='dashboard-body-nav-menu-item'>Выход</li>
                            </ul>
                        </div>
                        <div className='dashboard-body-page'></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
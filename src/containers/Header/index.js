import React, { Component } from 'react'
import classNames from 'classnames'

import './Header.scss'

export default class Header extends Component {
    toggleSidebarState() {
        const { sidebar } = this.props

        if (sidebar === 'full') this.props.setSidebarState('mini')
        if (sidebar === 'mini') this.props.setSidebarState('full')
    }

    render() {
        const { sidebar } = this.props

        return (
            <div className='dashboard-header'>
                <div className={classNames('dashboard-header-logo', `dashboard-header-logo_${sidebar}`)}>
                    <span className='dashboard-header-logo-icon'></span>
                    ISMAX icsystem
                </div>
                <div className='dashboard-header-toolbar'>
                    <a className='dashboard-header-toolbar-btn dashboard-header-toolbar-btn-toggle' onClick={::this.toggleSidebarState}>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-navicon'></span>
                    </a>

                    <a className='dashboard-header-toolbar-btn dashboard-header-toolbar-btn-logout'>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-sign-out'></span>
                    </a>

                    <a className='dashboard-header-toolbar-label'>
                        admin@ismax.ru
                    </a>

                    <a className='dashboard-header-toolbar-photo'>
                        <span className='dashboard-header-toolbar-photo-icon fa fa-user-circle-o'></span>
                    </a>
                </div>
            </div>
        )
    }
}
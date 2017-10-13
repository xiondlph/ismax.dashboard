import React, { Component } from 'react'
import classNames from 'classnames'

export default class Dashboard extends Component {
    toggleSidebarState() {
        const { sidebar } = this.props

        if (sidebar === 'full') this.props.setSidebarState('mini')
        if (sidebar === 'mini') this.props.setSidebarState('full')
    }

    render() {
        const { sidebar } = this.props

        return <div className='dashboard-header'>
            <div className={classNames('dashboard-header-logo', `dashboard-header-logo_${sidebar}`)}>
                <span className='dashboard-header-logo-icon'></span>
                ISMAX icsystem
            </div>
            <div className='dashboard-header-toolbar'>
                <a onClick={::this.toggleSidebarState}><span className='fa fa-navicon'></span></a>
            </div>
        </div> 
    }
}
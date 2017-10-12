import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import * as dashboardActions from '../actions/DashboardActions'

class Dashboard extends Component {
    toggleSidebarState() {
        const { sidebar } = this.props.dashboard

        if (sidebar === 'full') this.props.dashboardActions.setSidebarState('mini')
        if (sidebar === 'mini') this.props.dashboardActions.setSidebarState('full')
    }

    render() {
        const { sidebar } = this.props.dashboard

        return <div className='app'>
            <div className='dashboard'>
                <div className='dashboard-header'>
                    <div className='dashboard-header-logo'>
                        <span className='dashboard-header-logo-icon'></span>
                        ISMAX icsystem
                    </div>
                    <div className='dashboard-header-toolbar'>
                        <a onClick={::this.toggleSidebarState}><span className='fa fa-navicon'></span></a>
                    </div>
                </div>
                <div className='dashboard-main'>
                    <div className='dashboard-main-wrap'>
                        <div className={classNames('dashboard-main-sidebar', `dashboard-main-sidebar_${sidebar}`)}>
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
                        <div className='dashboard-main-content'>
                            { sidebar }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        dashboard: state.dashboard
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dashboardActions: bindActionCreators(dashboardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
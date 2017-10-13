import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import * as dashboardActions from '../../actions/DashboardActions'
import Header from './Header'

class Dashboard extends Component {
    render() {
        const
            {sidebar} = this.props.dashboard,
            {setSidebarState} = this.props.dashboardActions

        return <div className='app'>
            <div className='dashboard'>
                <Header sidebar={sidebar} setSidebarState={setSidebarState} />
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
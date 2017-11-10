/**
 * Мобильная версия контейнера левой боковой навигационной панели
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import {
    DASHBOARD_SIDEBAR_STATE_COLLAPSED
} from '../../constants/Dashboard'

import './MobileSidebar.scss'

export default class MobileSidebar extends Component {

    constructor(props) {
        super(props)

        this.resize = this.resize.bind(this)
    }

    resize(e) {
        if (e.target.innerWidth <= 600 && this.props.sidebar !== DASHBOARD_SIDEBAR_STATE_COLLAPSED) {
            this.props.setMobileSidebarState(DASHBOARD_SIDEBAR_STATE_COLLAPSED)
        }
    }

    componentDidMount() {
        global.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        global.removeEventListener('resize', this.resize);
    }

    collapseMobileSidebarState() {
        this.props.setMobileSidebarState(DASHBOARD_SIDEBAR_STATE_COLLAPSED)
    }

    render() {
        const
            { sidebar } = this.props,
            collapsed = sidebar === DASHBOARD_SIDEBAR_STATE_COLLAPSED

        return (
            <div className={classNames({
                'dashboard-sidebar-mobile': true,
                'dashboard-sidebar-mobile_collapsed': collapsed
            })}>
                <div className='dashboard-sidebar-mobile-mask' onClick={::this.collapseMobileSidebarState}/>
                <div className='dashboard-sidebar-mobile-wrap'>
                    <div className='dashboard-sidebar-mobile-menu'>
                        <div className='dashboard-sidebar-mobile-menu-logo'>
                            <span className='dashboard-sidebar-mobile-menu-logo-icon' />
                            ISMAX icsystem
                        </div>
                        <NavLink
                            to='/'
                            activeClassName='dashboard-sidebar-mobile-menu-item_active'
                            exact
                            className='dashboard-sidebar-mobile-menu-item'
                            onClick={::this.collapseMobileSidebarState}
                        >
                            <span className='dashboard-sidebar-mobile-menu-item-icon fa fa-user' />
                            <div className='dashboard-sidebar-mobile-menu-item-text'>Профиль</div>
                        </NavLink>
                        <NavLink
                            to='/payment'
                            activeClassName='dashboard-sidebar-mobile-menu-item_active'
                            className='dashboard-sidebar-mobile-menu-item'
                            onClick={::this.collapseMobileSidebarState}
                        >
                            <span className='dashboard-sidebar-mobile-menu-item-icon fa fa-credit-card' />
                            <div className='dashboard-sidebar-mobile-menu-item-text'>Оплата</div>
                        </NavLink>
                        <NavLink
                            to='/referrals'
                            activeClassName='dashboard-sidebar-mobile-menu-item_active'
                            className='dashboard-sidebar-mobile-menu-item'
                            onClick={::this.collapseMobileSidebarState}
                        >
                            <span className='dashboard-sidebar-mobile-menu-item-icon fa fa-users' />
                            <div className='dashboard-sidebar-mobile-menu-item-text'>Рефералы</div>
                        </NavLink>
                        <div className='dashboard-sidebar-mobile-menu-item'>
                            <span className='dashboard-sidebar-mobile-menu-item-icon fa fa-question' />
                            <span className='dashboard-sidebar-mobile-menu-item-text'>Помощь</span>
                        </div>
                        <div className='dashboard-sidebar-mobile-menu-item'>
                            <span className='dashboard-sidebar-mobile-menu-item-icon fa fa-sign-out' />
                            <span className='dashboard-sidebar-mobile-menu-item-text'>Выход</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MobileSidebar.propTypes = {
    sidebar: PropTypes.string.isRequired,
    setMobileSidebarState: PropTypes.func.isRequired
}
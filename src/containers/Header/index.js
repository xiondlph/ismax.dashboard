/**
 * Контейнер шапки панели
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
    DASHBOARD_SIDEBAR_STATE_EXPANDED,
    DASHBOARD_SIDEBAR_STATE_COLLAPSED
} from '../../constants/Dashboard'

import './Header.scss'

export default class Header extends Component {

    toggleSidebarState() {
        const { sidebar } = this.props

        if (sidebar === DASHBOARD_SIDEBAR_STATE_EXPANDED) {
            this.props.setSidebarState(DASHBOARD_SIDEBAR_STATE_COLLAPSED)
        }

        if (sidebar === DASHBOARD_SIDEBAR_STATE_COLLAPSED) {
            this.props.setSidebarState(DASHBOARD_SIDEBAR_STATE_EXPANDED)
        }
    }

    expandMobileSidebarState() {
        this.props.setMobileSidebarState(DASHBOARD_SIDEBAR_STATE_EXPANDED)
    }

    render() {
        const
            { sidebar, profile } = this.props,
            collapsed = sidebar === DASHBOARD_SIDEBAR_STATE_COLLAPSED

        return (
            <div className='dashboard-header'>
                <div className={classNames({
                    'dashboard-header-logo': true,
                    'dashboard-header-logo_collapsed': collapsed
                })}>
                    <span className='dashboard-header-logo-icon'></span>
                    ISMAX icsystem
                </div>
                <div className='dashboard-header-toolbar'>
                    <a className='dashboard-header-toolbar-btn dashboard-header-toolbar-btn-toggle' onClick={::this.toggleSidebarState}>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-navicon'></span>
                    </a>

                    <a className={classNames(
                        'dashboard-header-toolbar-btn',
                        'dashboard-header-toolbar-btn-toggle',
                        'dashboard-header-toolbar-btn-toggle_mobile')
                    } onClick={::this.expandMobileSidebarState}>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-navicon'></span>
                    </a>

                    <a className='dashboard-header-toolbar-btn dashboard-header-toolbar-btn-logout' data-tip='Выход'>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-sign-out'></span>
                    </a>

                    <a className='dashboard-header-toolbar-label'>{ profile.email }</a>

                    <a className='dashboard-header-toolbar-photo'>
                        <span className='dashboard-header-toolbar-photo-icon fa fa-user-circle-o'></span>
                    </a>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    sidebar: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
    setSidebarState: PropTypes.func.isRequired,
    setMobileSidebarState: PropTypes.func.isRequired
}
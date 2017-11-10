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
            { sidebar, mobileSidebar, profile } = this.props,
            collapsed = sidebar === DASHBOARD_SIDEBAR_STATE_COLLAPSED

        return (
            <div className={classNames({
                'dashboard-header': true,
                'dashboard-header_blur': mobileSidebar === DASHBOARD_SIDEBAR_STATE_EXPANDED
            })}>
                <div className={classNames({
                    'dashboard-header-logo': true,
                    'dashboard-header-logo_collapsed': collapsed
                })}>
                    <span className='dashboard-header-logo-icon' />
                    ISMAX icsystem
                </div>
                <div className='dashboard-header-toolbar'>
                    <a className='dashboard-header-toolbar-btn dashboard-header-toolbar-btn-toggle' onClick={::this.toggleSidebarState}>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-navicon' />
                    </a>

                    <a className={classNames(
                        'dashboard-header-toolbar-btn',
                        'dashboard-header-toolbar-btn-toggle',
                        'dashboard-header-toolbar-btn-toggle_mobile')
                    } onClick={::this.expandMobileSidebarState}>
                        <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-navicon' />
                    </a>

                    {profile.email && (
                        <a className='dashboard-header-toolbar-btn dashboard-header-toolbar-btn-logout' data-tip='Выход'>
                            <span className='dashboard-header-toolbar-btn-toggle-icon fa fa-power-off' />
                        </a>
                    )}

                    {profile.email && (
                        <a className='dashboard-header-toolbar-label'>{ profile.email }</a>
                    )}

                    {profile.email && (
                        <a className='dashboard-header-toolbar-picture'>
                            <span className='dashboard-header-toolbar-picture-icon fa fa-user-circle-o' />
                        </a>
                    )}

                </div>
            </div>
        )
    }
}

Header.propTypes = {
    sidebar: PropTypes.string.isRequired,
    mobileSidebar: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
    setSidebarState: PropTypes.func.isRequired,
    setMobileSidebarState: PropTypes.func.isRequired
}
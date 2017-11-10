/**
 * Контейнер центральной (клиентской) части панели
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Sidebar from '../Sidebar'

import {
    DASHBOARD_SIDEBAR_STATE_EXPANDED
} from '../../constants/Dashboard'

import './Main.scss'

export default class Main extends Component {
    hideNotice() {
        this.props.hideNotice()
    }

    render() {
        const { sidebar, mobileSidebar } = this.props

        return (
            <div className={classNames({
                'dashboard-main': true,
                'dashboard-main_blur': mobileSidebar === DASHBOARD_SIDEBAR_STATE_EXPANDED
            })}>
                <div className='dashboard-main-wrap'>
                    <Sidebar sidebar={sidebar} />
                    <div className='dashboard-main-content'>
                        <div className='dashboard-main-content-notice' onClick={::this.hideNotice}>{this.props.noticeMessage}</div>
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = {
	sidebar: PropTypes.string.isRequired,
	notice: PropTypes.bool.isRequired,
	noticeMessage: PropTypes.string.isRequired,
	hideNotice: PropTypes.func.isRequired,
}

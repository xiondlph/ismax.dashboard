/**
 * Главный контейнер разметки панели
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as dashboardActions from '../../redux/actions/DashboardActions'
import * as profileActions from '../../redux/actions/ProfileActions'
import Header from '../Header'
import Main from '../Main'

import './Dashboard.scss'

class Dashboard extends Component {
    componentDidMount() {
        const { getProfile } = this.props.profileActions

        getProfile();
    }

    render() {
        const
            { sidebar, notice, noticeMessage } = this.props.dashboard,
            { setSidebarState, hideNotice } = this.props.dashboardActions,
            { profile } = this.props

        return (
            <div className='app'>
                <div className='dashboard'>
                    <Header sidebar={sidebar} setSidebarState={setSidebarState} profile={profile}/>
                    <Main sidebar={sidebar} notice={notice} noticeMessage={noticeMessage} hideNotice={hideNotice}>
                        { this.props.children }
                    </Main>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        dashboard: state.dashboard,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
        profileActions: bindActionCreators(profileActions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
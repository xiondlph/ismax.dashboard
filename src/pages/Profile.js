/**
 * Страница профиля
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from '../redux/actions/DashboardActions'
import * as profileActions from '../redux/actions/ProfileActions'
import { Settings } from '../forms/index'

class Profile extends Component {
    settingsSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <Settings onSubmit={::this.settingsSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
/**
 * Страница профиля
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from '../redux/actions/DashboardActions'
import * as profileActions from '../redux/actions/ProfileActions'
import { Settings } from '../components/forms/index'

class Profile extends Component {
    saveProfile(values){
        console.log(values)
        console.log(this)
    }

    render() {
        const
            { email, address } = this.props.profile,
            settingsValues = {
                email,
                address
            }

        return (
            <div className='dashboard-page'>
                <Settings saveProfile={::this.saveProfile} initialValues={settingsValues}/>
                <Settings saveProfile={::this.saveProfile} initialValues={settingsValues}/>
                <Settings saveProfile={::this.saveProfile} initialValues={settingsValues}/>
                <Settings saveProfile={::this.saveProfile} initialValues={settingsValues}/>
                <Settings saveProfile={::this.saveProfile} initialValues={settingsValues}/>
                <Settings saveProfile={::this.saveProfile} initialValues={settingsValues}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
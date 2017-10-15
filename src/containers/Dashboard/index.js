import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as dashboardActions from '../../redux/actions/DashboardActions'
import Header from './Header'
import Main from './Main'

class Dashboard extends Component {
    render() {
        const
            {sidebar} = this.props.dashboard,
            {setSidebarState} = this.props.dashboardActions

        return <div className='app'>
            <div className='dashboard'>
                <Header sidebar={sidebar} setSidebarState={setSidebarState} />
                <Main sidebar={sidebar} />
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
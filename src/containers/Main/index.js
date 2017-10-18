import React, { Component } from 'react'
import Sidebar from '../Sidebar'

import './Main.scss'

export default class Main extends Component {
    render() {
        const { sidebar } = this.props

        return (
            <div className='dashboard-main'>
                <div className='dashboard-main-wrap'>
                    <Sidebar sidebar={sidebar} />
                    <div className='dashboard-main-content'>
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

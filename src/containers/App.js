import React, { Component } from 'react'

export default class App extends Component {
    onBtnClick() {
        //
    }

    render() {
        return <button onClick={this.onBtnClick}>Привет из App</button>
    }
}
import React, { Component } from 'react'

export default class App extends Component {
    onBtnClick() {
        console.log(Promise);
        console.log(fetch);
    }

    render() {
        return <button onClick={this.onBtnClick}>Привет из App</button>
    }
}
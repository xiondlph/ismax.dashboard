/**
 * Компонент текстового поля
 */

import React, { Component } from 'react'

export default class TextField extends Component {
    onChange(e) {
        const { input: { onChange } } = this.props

        onChange(e.target.value)
    }
    render() {
        const
            { value } = this.props.input,
            { error } = this.props.meta

        return (
            <div>
                <input type='text' value={value} onChange={::this.onChange} />
                { error && (<span>{error}</span>) }
            </div>
        )
    }
}

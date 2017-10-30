/**
 * Компонент текстового поля
 */

import React, { Component } from 'react'
import classNames from 'classnames'

import './TextField.scss'

export default class TextField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fucused: false
        };
    }

    onFocus() {
        this.setState({ fucused: true })
    }

    onBlur() {
        this.setState({ fucused: false })
    }

    onChange(e) {
        const { input: { onChange } } = this.props

        onChange(e.target.value)
    }
    render() {
        const
            { value } = this.props.input,
            { error } = this.props.meta

        return (
            <div className={classNames({
                'dashboard-field-text': true,
                'dashboard-field-text_focused': this.state.fucused
            })}>
                <input
                    className='dashboard-field-text-input'
                    type='text'
                    value={value}
                    onChange={::this.onChange}
                    onFocus={::this.onFocus}
                    onBlur={::this.onBlur}
                />
                <div className={classNames({
                    'dashboard-field-text-trigger': true,
                    'dashboard-field-text-trigger_show': !!error
                })}>
                        <span
                            className='dashboard-field-text-trigger-icon fa fa-exclamation-circle'
                            data-tip
                        />
                </div>
            </div>
        )
    }
}

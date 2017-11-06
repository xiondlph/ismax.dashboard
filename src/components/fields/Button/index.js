/**
 * Компонент кнопки формы
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

export default class Button extends Component {
    render() {
        const { type, disabled } = this.props

        return (
            <button
                className={classNames({
                    'dashboard-field-button': true
                })}
                type={type}
                disabled={disabled}
            >
                { this.props.children }
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}
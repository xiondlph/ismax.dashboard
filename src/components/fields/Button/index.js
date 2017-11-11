/**
 * Компонент кнопки формы
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

export default class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            btnWidth: 0
        }
    }

    componentDidMount() {
        const btn = ReactDOM.findDOMNode(this)

        this.setState({
            btnWidth: btn.clientWidth
        })

    }

    componentWillReceiveProps(nextProps) {
        const
            { loading } = nextProps,
            { btnWidth } = this.state,
            btn = ReactDOM.findDOMNode(this)

        if (loading) {
            btn.style.width = `${btnWidth}px`
        } else {
            btn.style.width = ''
        }
    }

    render() {
        const { type, disabled, loading } = this.props

        return (
            <button
                className={classNames({
                    'dashboard-field-button': true,
                    'dashboard-field-button_loading': loading
                })}
                type={type}
                disabled={disabled || loading}
            >
                { !loading && this.props.children }
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
}
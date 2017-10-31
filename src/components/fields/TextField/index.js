/**
 * Компонент текстового поля
 */

import React, { Component } from 'react'
import classNames from 'classnames'
import ReactTooltip from 'react-tooltip'

import './TextField.scss'

const Trigger = props => {
    const { tip, icon } = props

    return (
        <div className='dashboard-field-text-trigger'>
            <span
                className={`dashboard-field-text-trigger-icon fa fa-${icon}`}
                data-tip={tip}
            />
        </div>
    )
}

const InvalidTrigger = props => {
    const { error } = props

    return <Trigger tip={error} icon='exclamation-circle' />
}

export default class TextField extends Component {
    componentDidUpdate() {
        ReactTooltip.rebuild();
    }

    onChange(e) {
        const { input: { onChange } } = this.props

        onChange(e.target.value)
    }
    render() {
        const
            { value, onFocus, onBlur } = this.props.input,
            { error, active } = this.props.meta

        return (
            <div className={classNames({
                'dashboard-field-text': true,
                'dashboard-field-text_focused': active
            })}>
                <input
                    className='dashboard-field-text-input'
                    type='text'
                    value={value}
                    onChange={ ::this.onChange }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                />
                <Trigger tip='mushkaz' icon='question' />
                {error && (<InvalidTrigger error={error}/>)}
            </div>
        )
    }
}

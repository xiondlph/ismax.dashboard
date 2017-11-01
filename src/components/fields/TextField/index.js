/**
 * Компонент текстового поля
 */

import React, { Component } from 'react'
import classNames from 'classnames'
import ReactTooltip from 'react-tooltip'
import Trigger from './Trigger'
import InvalidTrigger from './InvalidTrigger'

import './TextField.scss'

export default class TextField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filled: false
        }
    }

    componentDidUpdate() {
        const { input: { value } } = this.props
        ReactTooltip.rebuild();

        if (this.state.filled !== !!value) {
            this.setState({
                filled: !!value
            })
        }
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
                'dashboard-field-text_focused': active,
                'dashboard-field-text_filled': this.state.filled
            })}>
                <input
                    className='dashboard-field-text-input'
                    type='text'
                    value={value}
                    onChange={ ::this.onChange }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                />
                <div className='dashboard-field-text-label'>Label</div>
                <Trigger tip='mushkaz' icon='question' handler={() => alert('mushkaz')}/>
                {error && (<InvalidTrigger error={error}/>)}
            </div>
        )
    }
}

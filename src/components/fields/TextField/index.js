/**
 * Компонент текстового поля
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

        // Обновим тултипы
        ReactTooltip.rebuild();

        this.updateLabelPosition()
    }

    componentDidMount() {
        this.updateLabelPosition()
    }

    updateLabelPosition() {
        const { input: { value } } = this.props

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

    triggers() {
        const { triggers } = this.props
        let items = []

        for(let index in triggers) {
            items.push({
                key: index,
                ...triggers[index]
            })
        }

        return items.map(item => (<Trigger
                key={item.key}
                tip={item.tip}
                icon={item.icon}
                type={item.type}
                handler={item.handler}
            />)
        )
    }


    render() {
        const
            {
                input: { value, onFocus, onBlur },
                meta: { error, active },
                label
            } = this.props

        return (
            <div className={classNames({
                'dashboard-field-text': true,
                'dashboard-field-text_focused': active,
                'dashboard-field-text_filled': this.state.filled,
                'dashboard-field-text_error': error
            })}>
                <input
                    className='dashboard-field-text-input'
                    type='text'
                    value={value}
                    onChange={ ::this.onChange }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                />
                <div className='dashboard-field-text-label'>{label}</div>
                {error && (<InvalidTrigger error={error}/>)}
                {::this.triggers()}
            </div>
        )
    }
}

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    trigger: PropTypes.object
}
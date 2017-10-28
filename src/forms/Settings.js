/**
 * Форма настройки
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Input extends Component {
    onChange(e) {
        const { input: { onChange } } = this.props

        onChange(e.target.value)
    }
    render() {
        let
            { value } = this.props.input

        return (
            <input type='text' value={value} onChange={::this.onChange} />
        )
    }
}

class Form extends Component {
    render() {
        const
            { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field name='email' component={Input} type='text'/>
                <div>
                    <button type='submit'>Сохранить</button>
                </div>
            </form>
        )
    }
}

const Settings = reduxForm({
    form: 'settings'
})(Form)

export default Settings;
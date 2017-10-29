/**
 * Форма настройки
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from '../fields'

class SettingsForm extends Component {
    settingsSubmit(values) {
        this.props.saveProfile(values);
    }

    email(val){
        let result = val && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
            ? 'meshkaz'
            : undefined

        return result
    }

    render() {
        const
            { handleSubmit, pristine, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(::this.settingsSubmit)}>
                <Field name='email' component={TextField} type='text' validate={this.email} meshkaz='meshkaz' />
                <Field name='address' component={TextField} type='text' />
                <div>
                    <button type='submit' disabled={pristine || submitting}>Сохранить</button>
                </div>
            </form>
        )
    }
}

let Settings = reduxForm({
    form: 'settings',
    enableReinitialize : true
})(SettingsForm)

export default Settings;
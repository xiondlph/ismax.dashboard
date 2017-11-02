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
            { handleSubmit, pristine, submitting} = this.props,
            triggers = {
                email: {
                    info: {
                        tip: 'meshkaz',
                        icon: 'question',
                        handler() {
                            console.log('info');
                        }
                    },

                    payment: {
                        tip: 'Пополнить запросы',
                        icon: 'credit-card',
                        handler() {
                            console.log('Оплата')
                        }
                    }
                }
            }

        return (
            <form onSubmit={handleSubmit(::this.settingsSubmit)}>
                <Field
                    name='email'
                    component={TextField}
                    type='text'
                    validate={this.email}
                    label='E-mail'
                    triggers={triggers.email}
                />
                <Field
                    name='address'
                    component={TextField}
                    type='text'
                    label='IP адрес'
                />
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
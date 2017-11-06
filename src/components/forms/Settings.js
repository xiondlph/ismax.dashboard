/**
 * Форма настройки
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import classNames from 'classnames'
import { TextField, Button } from '../fields'

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
            <form
                className={classNames({
                    'dashboard-form': true,
                    'dashboard-form-settings': true
                })}
                onSubmit={handleSubmit(::this.settingsSubmit)}
            >
                <div className='dashboard-form-header'>
                    <span className='dashboard-form-header-title'>Настройки</span>
                </div>
                <div className='dashboard-form-body'>
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
                </div>
                <div className='dashboard-form-buttons'>
                    <Button type='submit' disabled={pristine || submitting}>Сохранить</Button>
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
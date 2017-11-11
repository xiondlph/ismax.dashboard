/**
 * Форма настройки
 */

import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import classNames from 'classnames'
import { TextField, Button } from '../fields'

class SettingsForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    settingsSubmit(values) {
        this.props.saveProfile(values);

        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }

    email(val){
        let result = val && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
            ? 'Некорректный адрес электронной почты'
            : undefined

        return result
    }

    render() {
        const
            { loading } = this.state,
            { handleSubmit, pristine, submitting} = this.props,
            triggers = {
                address: {
                    info: {
                        tip: 'В целях безопасности, доступ к API осуществляться исключительно с IP адреса привязанного к Вашему аккаунту.',
                        icon: 'question'
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
                        disabled={loading}
                    />
                    <Field
                        name='address'
                        component={TextField}
                        type='text'
                        label='IP адрес'
                        triggers={triggers.address}
                        disabled={loading}
                    />
                </div>
                <div className='dashboard-form-buttons'>
                    <Button
                        type='submit'
                        disabled={pristine || submitting}
                        loading={loading}
                    >Сохранить</Button>
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
import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextField from '../index'

configure({ adapter: new Adapter() })

describe('TextField', () => {
    test('Проверка TextField снапшота', () => {
        const
            type = 'text',
            label = 'Email',
            input = {
                value: 'user@email.com',
                onChange: jest.fn(),
                onFocus: jest.fn(),
                onBlur: jest.fn()
            },
            meta = {},
            triggers = {
                email: {
                    info: {
                        tip: 'info',
                        icon: 'question'
                    }
                }
            },
            component = renderer.create(
                <TextField type={type} label={label} input={input} meta={meta} trigger={triggers.email} />
            )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Проверка невалидного значения в TextField', () => {
        const
            type = 'text',
            label = 'Email',
            input = {
                value: 'user@email.com',
                onChange: jest.fn(),
                onFocus: jest.fn(),
                onBlur: jest.fn()
            },
            meta = {},
            triggers = {
                email: {
                    info: {
                        tip: 'info',
                        icon: 'question',
                        type: 'info'
                    }
                }
            },
            textField = mount(
                <TextField type={type} label={label} input={input} meta={meta} triggers={triggers.email} />
            );

        expect(textField.find('.dashboard-field-text_error').exists()).toEqual(false)

        textField.setProps({
            meta: {
                error: 'invalid'
            }
        })

        expect(textField.find('.dashboard-field-text_error').exists()).toEqual(true)

        // Проверка наличия триггиров
        expect(textField.find('.dashboard-field-text-trigger_error').length).toBe(1)
        expect(textField.find('.dashboard-field-text-trigger_info').length).toBe(1)
    })

    test('Проверка поведения на наличия значения в TextField', () => {
        const
            type = 'text',
            label = 'Email',
            input = {
                value: '', // Пустое значение
                onChange: jest.fn(),
                onFocus: jest.fn(),
                onBlur: jest.fn()
            },
            meta = {},
            triggers = {
                email: {
                    info: {
                        tip: 'info',
                        icon: 'question'
                    }
                }
            },
            textField = shallow(
                <TextField type={type} label={label} input={input} meta={meta} trigger={triggers.email} />
            );

        expect(textField.find('.dashboard-field-text_filled').exists()).toEqual(false)

        textField.setProps({
            input: {
                value: 'user@email.com'
            }
        })

        expect(textField.find('.dashboard-field-text_filled').exists()).toEqual(true)
    })
})
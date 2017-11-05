import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Trigger from '../Trigger'

configure({ adapter: new Adapter() })

describe('Trigger', () => {
    test('Проверка Trigger снапшота', () => {
        const
            tip = 'trigger',
            icon = 'icon',
            type = 'default',
            handler = jest.fn(),
            component = renderer.create(
                <Trigger tip={tip} icon={icon} type={type} handler={handler} />
            )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Проверка колбека на клик', () => {
        const
            tip = 'trigger',
            icon = 'icon',
            type = 'default',
            handler = jest.fn(),
            trigger = shallow(
                <Trigger tip={tip} icon={icon} type={type} handler={handler} />
            );

        trigger.find('.dashboard-field-text-trigger-icon').simulate('click')
        expect(handler.mock.calls.length).toBe(1)
    })
})
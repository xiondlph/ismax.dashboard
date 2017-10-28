import React from 'react'
import renderer from 'react-test-renderer'
import { HashRouter } from 'react-router-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from '../index'

import {
    DASHBOARD_SIDEBAR_STATE_EXPANDED
} from '../../../constants/Dashboard'

configure({ adapter: new Adapter() })

describe('Sidebar', () => {
    test('Проверка Sidebar снапшота', () => {

        // Делаем активнам пункт меню payment
        window.location.hash = '#/payment'

        const
            sidebar = DASHBOARD_SIDEBAR_STATE_EXPANDED,
            component = renderer.create(
                // Нужно обернуть в Router
                <HashRouter>
                    <Sidebar sidebar={sidebar} />
                </HashRouter>
            )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
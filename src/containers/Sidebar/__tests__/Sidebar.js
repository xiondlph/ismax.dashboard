import React from 'react'
import renderer from 'react-test-renderer'
// import { configure, shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Sidebar from '../index'

import {
    DASHBOARD_SIDEBAR_STATE_EXPANDED
} from '../../../constants/Dashboard'

test('Проверка Sidebar снапшота', () => {
    const
        sidebar = DASHBOARD_SIDEBAR_STATE_EXPANDED,
        component = renderer.create(
            <Sidebar sidebar={sidebar} />
        )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
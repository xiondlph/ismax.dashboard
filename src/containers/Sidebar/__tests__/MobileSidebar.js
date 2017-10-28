import React from 'react'
import renderer from 'react-test-renderer'
import { HashRouter } from 'react-router-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MobileSidebar from '../MobileSidebar'

import {
    DASHBOARD_SIDEBAR_STATE_EXPANDED,
    DASHBOARD_SIDEBAR_STATE_COLLAPSED
} from '../../../constants/Dashboard'

configure({ adapter: new Adapter() })

describe('MobileSidebar', () => {
    test('Проверка MobileSidebar снапшота', () => {

        // Делаем активнам пункт меню payment
        window.location.hash = '#/payment'

        const
            sidebar = DASHBOARD_SIDEBAR_STATE_EXPANDED,
            setMobileSidebarState = jest.fn(),
            component = renderer.create(
                // Нужно обернуть в Router
                <HashRouter>
                    <MobileSidebar sidebar={sidebar} setMobileSidebarState={setMobileSidebarState} />
                </HashRouter>
            )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Проверка сворачивания MobileSidebar', () => {
        const
            sidebar = DASHBOARD_SIDEBAR_STATE_EXPANDED,
            setMobileSidebarState = () => {
                mobileSitebar.setProps({ sidebar: DASHBOARD_SIDEBAR_STATE_COLLAPSED })
            },
            mobileSitebar = shallow(
                <MobileSidebar sidebar={sidebar} setMobileSidebarState={setMobileSidebarState} />
            );

        expect(mobileSitebar.hasClass('dashboard-sidebar-mobile')).toEqual(true)
        expect(mobileSitebar.hasClass('dashboard-sidebar-mobile_collapsed')).toEqual(false)

        mobileSitebar.find('.dashboard-sidebar-mobile-mask').first().simulate('click')
        expect(mobileSitebar.hasClass('dashboard-sidebar-mobile_collapsed')).toEqual(true)
    })
})

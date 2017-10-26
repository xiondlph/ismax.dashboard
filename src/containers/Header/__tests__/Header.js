import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../index'

import {
	DASHBOARD_SIDEBAR_STATE_EXPANDED,
	DASHBOARD_SIDEBAR_STATE_COLLAPSED
} from '../../../constants/Dashboard'

configure({ adapter: new Adapter() });

test('Проверка Header снапшота', () => {
    const
		sidebar = DASHBOARD_SIDEBAR_STATE_COLLAPSED,
		profile = {},
		setSidebarState = jest.fn(),
		setMobileSidebarState = jest.fn(),
        component = renderer.create(
            <Header sidebar={sidebar} profile={profile} setSidebarState={setSidebarState} setMobileSidebarState={setMobileSidebarState}/>
        )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Проверка смены состояния Sidebar', () => {
    const
        sidebar = DASHBOARD_SIDEBAR_STATE_COLLAPSED,
        profile = {
            email: 'test@email.com'
        },
        setSidebarState = () => {
            header.setProps({ sidebar: DASHBOARD_SIDEBAR_STATE_EXPANDED })
        },
		setMobileSidebarState = () => {
			header.setProps({ sidebar: DASHBOARD_SIDEBAR_STATE_EXPANDED })
		},
        header = shallow(
            <Header sidebar={sidebar} profile={profile} setSidebarState={setSidebarState} setMobileSidebarState={setMobileSidebarState} />
        );

    expect(header.find('.dashboard-header-logo').exists()).toEqual(true)
    expect(header.find('.dashboard-header-logo').hasClass('dashboard-header-logo_collapsed')).toEqual(true)

    header.find('.dashboard-header-toolbar a').simulate('click');
    expect(header.find('.dashboard-header-logo').hasClass('dashboard-header-logo_collapsed')).toEqual(false)
})

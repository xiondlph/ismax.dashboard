import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

configure({ adapter: new Adapter() });

test('Проверка Header снапшота', () => {
    const component = renderer.create(
        <Header />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('Проверка смены состояния Sidebar', () => {
    const
        sidebar = 'mini',
        setSidebarState = () => {
            header.setProps({ sidebar: 'full' })
        },
        header = shallow(
            <Header sidebar={sidebar} setSidebarState={setSidebarState}/>
        );

    expect(header.find('.dashboard-header-logo').exists()).toEqual(true)
    expect(header.find('.dashboard-header-logo').hasClass('dashboard-header-logo_mini')).toEqual(true)

    header.find('.dashboard-header-toolbar a').simulate('click');
    expect(header.find('.dashboard-header-logo').hasClass('dashboard-header-logo_full')).toEqual(true)
})

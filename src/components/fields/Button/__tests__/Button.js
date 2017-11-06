import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../index'

describe('Button', () => {
    test('Проверка Button снапшота', () => {
        const
            component = renderer.create(
                <Button type='button' disabled={false}>Action</Button>
            )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('Проверка disable состояния для button', () => {
        const
            component = renderer.create(
                <Button type='button' disabled={true}>Action</Button>
            )

        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
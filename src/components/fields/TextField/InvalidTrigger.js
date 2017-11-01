/**
 * Триггер ошибки валидации
 */

import React from 'react'
import Trigger from './Trigger'

const InvalidTrigger = props => {
    const { error } = props

    return <Trigger tip={error} icon='exclamation-circle' type='error'/>
}

export default InvalidTrigger
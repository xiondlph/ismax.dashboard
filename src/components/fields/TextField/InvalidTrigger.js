/**
 * Триггер ошибки валидации
 */

import React from 'react'
import PropTypes from 'prop-types'
import Trigger from './Trigger'

const InvalidTrigger = props => {
    const { error } = props

    return <Trigger tip={error} icon='exclamation-circle' type='error'/>
}

InvalidTrigger.propTypes = {
    error: PropTypes.string.isRequired
}

export default InvalidTrigger
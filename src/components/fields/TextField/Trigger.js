/**
 * Стандартный триггер
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Trigger extends Component {
    onIconClick() {
        const { handler } = this.props

        if (typeof handler === 'function') {
            handler()
        }
    }

    render() {
        const { tip, icon, type } = this.props

        return (
            <div className={classNames({
                'dashboard-field-text-trigger': true,
                [`dashboard-field-text-trigger_${type}`]: !!type
            })}>
                <span
                    className={`dashboard-field-text-trigger-icon fa fa-${icon}`}
                    data-tip={tip}
                    data-type={type}
                    onClick={::this.onIconClick}
                />
            </div>
        )
    }
}

Trigger.propTypes = {
    tip: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handler: PropTypes.func
}

export default Trigger
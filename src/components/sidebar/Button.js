import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <li className="nav-item">
				<a className="nav-link" href="/">
					<i className={props.icono}></i>
					<span>{props.texto}</span></a>
        </li>
    )
}

Button.propTypes = {
    icono: PropTypes.string,
    texto: PropTypes.string
}

Button.defaultProps = {
    icono: 'fas fa-fw fa-tachometer-alt'
}

export default Button
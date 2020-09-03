import React from 'react'


const Icons = (props) => {

    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id={props.id}>
                <i className={props.icono}></i>
                <span className="badge badge-danger badge-counter">{props.cantidad}</span>
            </a>
        </li>
    )
}

export default Icons
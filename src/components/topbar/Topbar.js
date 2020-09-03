import React from 'react'
import Icons from './Icons'

const Topbar = () => {

    const iconos = [
		
		{   
            id: 'alertsDropdown',
            icono:'fas fa-bell fa-fw',
            cantidad: '3+'
		},
		{   
            id: 'messagesDropdown',
            icono:'fas fa-envelope fa-fw',
            cantidad: '7'
		}
	]

    return (
        
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                {
				    iconos.map((result, i) => {
					    return (
						    <Icons
                                key={i}
                                id={result.id}
							    icono={result.icono}
							    cantidad={result.cantidad}	
						    />
					    )
				    })
			    }
                

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                        <img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60" alt="avatar"/>
                    </a>
                </li>

            </ul>

        </nav>

    )
}

export default Topbar
import React from 'react'
import Button from './Button'

const Sidebar = () => {

	const misLinks = [
		
		{
			icono:'fas fa-fw fa-folder',
			texto:'Pages'
		},
		{
			icono:'fas fa-fw fa-chart-area',
			texto:'Charts'
		},
		{
			icono:'fas fa-fw fa-table',
			texto:'Tables'
		}
	]

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			
			<hr className="sidebar-divider my-0" />

			
			<Button 
				icono='fas fa-fw fa-tachometer-alt'
				texto='Dashboard'	
			/>
			
			<hr className="sidebar-divider" />

			
			<div className="sidebar-heading">Actions</div>

			
			{
				misLinks.map((link, i) => {
					return (
						<Button
							key={i}
							icono={link.icono}
							texto={link.texto}	
						/>
					)
				})
			}

						
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default Sidebar
import React from 'react'
import "../css/MainNav.css"
import { Route,NavLink } from 'react-router-dom'

export const MainNav = () => {
	return (
		<ul className="main_nav">
			
			<il><NavLink to="/">Home</NavLink></il>
			<il><NavLink to="/insert">Insert</NavLink></il>
			<il><NavLink to="/list">List</NavLink></il>
		</ul>
	)
}

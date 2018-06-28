import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Users from '../containers/Users'
import Home from '../containers/Home'


export default ({ children }) => (
	<Router>
		<div>
			{children}
			
			<Route exact path='/' component={Home} />
			<Route path='/users' component={Users} />
		</div>
	</Router>
)
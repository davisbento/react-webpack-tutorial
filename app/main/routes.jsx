import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Users from '../containers/Users'
import Home from '../containers/Home'


export default ({ }) => (
	<Router>
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">React - Iniciante</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/users">Usuários</Link>
						</li>
					</ul>
				</div>
			</nav>

			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/users' component={Users} />
			</Switch>
		</div>
	</Router>
)
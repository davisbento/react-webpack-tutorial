import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Router from './routes';

import '../static/style.scss'
import 'modules/bootstrap/scss/bootstrap.scss'

class App extends React.Component {
	render() {
		return (
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Navbar</a>
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
			</Router>
		)
	}
}

export default App
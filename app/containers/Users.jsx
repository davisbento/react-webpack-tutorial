import React from 'react'
import axios from 'axios'
import UserList from '../components/UserList'

class Users extends React.Component {
	constructor() {
		super()
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		axios.get('https://api.github.com/users')
			.then(response => {
				this.setState({
					list: response.data
				})
			})
			.catch(err => {
				console.log(err)
			});
	}

	render() {
		return (
			<div className='container'>
				<div className='jumbotron'>
					<h1>GITHUB API GET</h1>
				</div>
				<UserList list={this.state.list} />
			</div>
		)
	}
}

export default Users
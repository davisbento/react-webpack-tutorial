import React from 'react'

const UserList = ({ list }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Login</th>
					<th>URL</th>
				</tr>
			</thead>
			<tbody>
				{list.map(user => {
					return (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.login}</td>
							<td>{user.url}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default UserList
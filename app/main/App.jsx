import React from 'react'
import axios from 'axios'

import UserList from '../components/UserList'

class App extends React.Component {
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
            })
    }

    render() {
        return (
            <div>
                <h1>GITHUB API GET</h1>
                <UserList list={this.state.list} />
            </div>
        )
    }
}

export default App
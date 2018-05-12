import React from 'react'
import axios from 'axios'
import UserList from '../components/UserList'

import '../static/style.scss'
import 'modules/bootstrap/scss/bootstrap.scss'

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

export default App
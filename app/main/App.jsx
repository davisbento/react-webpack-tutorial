import React from 'react'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: '',
                email: '',
            },
            list: []
        }
     
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;

        const user = this.state.user;   
       
        user[field] = value;

        this.setState({ user })
    }

    handleSubmit(event) {
        event.preventDefault();

        const newUser = {
            name: '',
            email: '',
        }

        const user = this.state.user;
        const list = this.state.list;

        list.push(user);

        this.setState({ list, user: newUser });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.user.name} onChange={this.handleChange}  name='name' />
                <input value={this.state.user.email} onChange={this.handleChange} name='email' />

                <input type='submit' value='Enviar' />

                {console.log(this.state.list)}
            </form>
        );
    }
}

export default App
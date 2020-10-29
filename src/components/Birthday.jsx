import React, { Component } from 'react';

class Birthday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeAge: this.props.person.age
        }
    }
    getAged = () => this.setState({changeAge: this.state.changeAge + 1});

    render() {
        return(
            <div>
                <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
                <p>Age: {this.state.changeAge}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
                <button onClick = {this.getAged}>You are getting old haha</button>
            </div>
        )
    }
}

export default Birthday;
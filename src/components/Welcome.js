import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}. Or should I say, {this.props.heroName}?</h1>
    }
}

export default Welcome
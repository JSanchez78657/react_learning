import React from 'react'

const Greet = (props) => {
    const {name, heroName} = props
    return <h1>Hello, {name}. Or should I say, {heroName}?</h1>
}

export default Greet
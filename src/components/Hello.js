import React from 'react'

const Hello = () => {
    return React.createElement('div', {className: 'Hello'},
        React.createElement('h1', null, 'Hello? Are you still there?')
    )
}

export default Hello
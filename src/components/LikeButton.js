import React from 'react'

function LikeButton(props) {
    return (
        <button onClick= {() => props.likeButton(props.name)}>Like {props.name}</button>
    );
}

export default LikeButton
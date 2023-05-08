import React, { Component } from 'react'
import LikeButton from './LikeButton'

class Info extends Component {

    constructor(props) {
        super(props)
        const {publicHero} = this.props
        this.state = {
            revealSecretIdentity: publicHero,
            logoState: 'hidden',
            buttonText: (publicHero) ? "Hide Secret Identity" : 'Reveal Secret Identity'
        }
        this.toggleIdentity = this.toggleIdentity.bind(this)
    }

    toggleIdentity() {
        const {revealSecretIdentity} = this.state
        if(revealSecretIdentity) {
            this.setState({revealSecretIdentity: false}, () =>
                this.setState({buttonText: 'Reveal Secret Identity'})
            )
        }
        else {
            this.setState({revealSecretIdentity: true}, () =>
                this.setState({buttonText: 'Hide Secret Identity'})
            )
        }
    }

    likeButton(name) {
        alert(`${name} is awesome!`)
    }

    render() {
        const {alias, power, weakness, secretIdentity, publicHero} = this.props
        const {revealSecretIdentity, buttonText} = this.state
        return (
            <div>
                <h2>{alias}</h2>
                <h3>Power: {power}</h3>
                <h3>Weakness: {weakness}</h3>
                <h3>{(publicHero) ? 'Public' : 'Secret'} Identity: {(revealSecretIdentity) ? secretIdentity : "Hidden"}</h3>
                <button onClick={this.toggleIdentity}>{buttonText}</button>
                <LikeButton name={alias} likeButton={this.likeButton}/>
            </div>
        )
    }
}

export default Info
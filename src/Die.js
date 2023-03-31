import React, { Component } from "react";
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`Die fa-solid fa-dice-${this.props.face} fa-2xl" style={{ color: '#814c9a`}></i>
            </div>
        )
    }
}

export default Die;
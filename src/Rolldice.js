import React, { Component } from 'react'
import Die from './Die';
import './Rolldice.css'


class Rolldice extends React.Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = { die1: 'one', die2: 'one', rolling: false };
        this.roll = this.roll.bind(this);
    }

    roll() {
        //pick 2 new sides
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        //set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        //wait one second, then set rolling to false in order to come back to 'Roll Dice'
        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1> Rolling Dice</h1>
                <div className='RollDice'>
                    <div className='RollDice-container'>
                        <Die face={this.state.die1} />
                        <Die face={this.state.die2} />
                    </div>
                    <button onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                    </button>
                </div>


            </div>
        )

    }
}

export default Rolldice;

/* <Die s1={this.state.s1} />
<Die s2={this.state.s2} /> */
import React, { Component } from 'react';

import Display from './Display';
import Clear from './Clear';
import NumArea from './NumArea';
import MathOps from './MathOps';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            displayNumber: []
        }
    }

    render () {
        return (
            <div className="calcBody">
                <Display num={this.state.displayNumber} className="display"/>
                <Clear clickHandler={this._clear}/>
                <NumArea clickHandler={this._changeDisplay}/>
                <MathOps />
            </div>
        );
    }

    _clear = () => {
        this.setState({
            displayNumber: ""
        });
    }

    _changeDisplay = (num) => {
        this.setState({
            displayNumber: this.state.displayNumber.concat([num]) 
        });
        console.log("The number is: " + this.state.displayNumber);
    }
}


export default Calculator;
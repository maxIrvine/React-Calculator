import React, { Component } from 'react';

import Display from './Display';
import Clear from './Clear';
import NumArea from './NumArea';
import MathOps from './MathOps';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            displayNumber: 0
        }
    }

    render () {
        return (
            <div>
                <Display num={this.state.displayNumber}/>
                <Clear clickHandler={this._clear}/>
                <NumArea clickHandler={this._changeDisplay}/>
                <MathOps />
            </div>
        );
    }

    _clear = () => {
        this.setState({
            displayNumber: 0
        });
    }

    _changeDisplay = ({num}) => {
        this.setState({
            displayNumber: this.state.displayNumber + num
        });
    }
}


export default Calculator;
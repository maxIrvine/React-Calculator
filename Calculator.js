import React, { Component } from 'react';

import Display from './Display';

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
                <Clear />
                <NumArea />
                <MathOps />
            </div>
        );
    }
}


export default App;
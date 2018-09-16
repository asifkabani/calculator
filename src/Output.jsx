import React, { Component } from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 5,
            peek: 4
        };
    }

    render() {
        return (
            <React.Fragment>
                <output className="peek">{this.state.peek}</output>
                <output className="calculate">{this.state.output}</output>
            </React.Fragment>
        );
    }
}

export default Output;
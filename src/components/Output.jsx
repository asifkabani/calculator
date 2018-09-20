import React from 'react';

function Output(props) {
    return (
        <div className="row">
            <output className="left">{props.peek}</output>
            <output className="right">{props.calculate}</output>
        </div>
    );
}

export default Output;
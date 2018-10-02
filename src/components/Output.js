import React from 'react';

function Output(props) {
    return (
        <div className="row">
            <output className="right">{props.calculate}</output>
        </div>
    );
}

export default Output;
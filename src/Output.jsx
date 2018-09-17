import React from 'react';

// TODO: proptypes
export default function Output(props) {
    return (
        <React.Fragment>
            <output className="peek">{props.peek}</output>
            <output className="calculate">{props.calculate}</output>
        </React.Fragment>
    );
}
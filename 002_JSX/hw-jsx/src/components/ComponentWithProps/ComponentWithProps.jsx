import React from 'react';
import "./ComponentWithProps.scss"

const ComponentWithProps = (props) => {
    return (
        <div>
            <p>{props.text1} {props.text2}!</p>
            <p>My name is {props.text3}</p>
        </div>
    );
};

export default ComponentWithProps;
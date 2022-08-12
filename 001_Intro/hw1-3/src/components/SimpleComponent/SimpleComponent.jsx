import React from 'react';
import summerImg from '../../assets/summer.png';
import "./SimpleComponent.scss"

const SimpleComponent = () => {
    return (
        <div>
            <p className="simple-text">Text in the Simple Component</p>
            <img src={summerImg} alt="summer" />
        </div>
    );
};

export default SimpleComponent;
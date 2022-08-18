import React, { Component } from 'react';
import "./ComponentLifeCycle.scss";

class ComponentLifeCycle extends Component {
    componentDidMount() {
        alert("ComponentDidMount method")
    }

    componentWillUnmount() {
        alert("ComponentWillUnmount method")
    }

    render() {
        return (
            <div className='componentLifeCycle'>
                <p>This is a Component with Life Cycle methods</p>
            </div>
        );
    }
}

export default ComponentLifeCycle;
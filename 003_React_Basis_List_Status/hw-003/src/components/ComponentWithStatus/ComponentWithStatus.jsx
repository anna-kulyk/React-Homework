import React, { Component } from 'react';
import "./ComponentWithStatus.scss";

class ComponentWithStatus extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    };

    render() {
        return (
            <div className='componentWithStatus'>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default ComponentWithStatus;
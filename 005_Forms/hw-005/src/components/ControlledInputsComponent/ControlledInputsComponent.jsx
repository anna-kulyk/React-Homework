import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ControlledInputsComponent.scss'

class OutputNumber extends Component {
    render() {
        return (
            <div className='outputNumber'>
                <p className='outputNumber_label'>{`number*${this.props.multiplier}:`}</p>
                <p className='outputNumber_number'>{this.props.number * this.props.multiplier}</p>
            </div>
        );
    }
}

OutputNumber.propTypes = {
    number: PropTypes.number
}

class ControlledInputsComponent extends Component {
    state = {
        first: '',
        second: ''
    }

    hadleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='controlledInputsComponent'>
                <input 
                    type={'number'} 
                    name='first' 
                    value={this.state.first} 
                    onChange={this.hadleOnChange} 
                />
                <OutputNumber number={+this.state.first} multiplier={0.5} />
                <input 
                    type={'number'} 
                    name='second' 
                    value={this.state.second} 
                    onChange={this.hadleOnChange} 
                />
                <OutputNumber number={+this.state.second} multiplier={0.05} />
            </div>
        );
    }
}

export default ControlledInputsComponent;
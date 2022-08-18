import React, { Component } from 'react';
import "./FormComponent.scss";

class FormComponent extends Component {
    state = {
        input: '',
        textArea: '',
        select: "option1"
    };

    hadleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hadleOnSubmit = (e) => {
        e.preventDefault();
        const output = document.querySelector('.output');
        output.innerHTML = '';
        const formData = new FormData(document.forms[0]);
        for(let [name, value] of formData) {
            output.innerHTML += `<p>${name} = ${value}</p>`;
        };
    }

    render() {
        return (
            <div className='formComponent'>
                <form onSubmit={this.hadleOnSubmit}>
                    <label>
                        Input 
                        <input 
                            type="text"
                            name="input"
                            value={this.state.input}
                            onChange={this.hadleOnChange}
                        />
                    </label>
                    <label>
                        Textarea
                        <textarea 
                            name="textArea"
                            value={this.state.textArea} 
                            onChange={this.hadleOnChange}
                        />
                    </label>
                    <label>
                        Select
                        <select name='select' value={this.state.select} onChange={this.hadleOnChange}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </label>
                    <input type='submit' value='Submit' />
                </form>
                <div className='output'></div>
            </div>
        );
    }
}

export default FormComponent;
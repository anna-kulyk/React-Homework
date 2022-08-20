import React, { Component } from 'react';
import styles from "./StyledFormComponent.module.scss";

class FormComponent extends Component {
    state = {
        login: '',
        password: ''
    };

    hadleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hadleOnClick = (e) => {
        const form = e.target.parentElement;
        for (let element of form.elements) {
            if(!element.validity.valid) {
                element.classList.remove(`${styles['styled-form__input--valid']}`);
                element.classList.add(`${styles['styled-form__input--invalid']}`);
            }
            else {
                element.classList.remove(`${styles['styled-form__input--invalid']}`);
                element.classList.add(`${styles['styled-form__input--valid']}`);
            }
        }
    }

    hadleOnSubmit = (e) => {
        e.preventDefault();
        alert('submit success');
        this.props.handleLogIn(e.target.elements.login.value);
    }

    render() {
        return (
            <div>
                <form className={styles['styled-form']} onSubmit={this.hadleOnSubmit}>
                    <label className={styles['styled-form__label']}>
                        Login 
                        <input 
                            type="text"
                            name="login"
                            className={styles['styled-form__input--valid']}
                            value={this.state.login}
                            onChange={this.hadleOnChange}
                            required
                        />
                    </label>
                    <label className={styles['styled-form__label']} >
                        Password
                        <input 
                            type="password"
                            name="password"
                            className={styles['styled-form__input--valid']}
                            value={this.state.password}
                            onChange={this.hadleOnChange}
                            required
                        />
                    </label>
                    <input 
                        className={styles['styled-form__btn']} 
                        type='submit' 
                        value='Log In'
                        onClick={this.hadleOnClick} 
                    />
                </form>
            </div>
        );
    }
}

export default FormComponent;
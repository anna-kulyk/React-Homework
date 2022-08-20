import React, { Component } from 'react';
import styles from "./UserGreatingComponent.module.scss";

class UserGreatingComponent extends Component {
    render() {
        return (
            <div>
                <p className={styles['greating']}>Hello, {this.props.userName}!</p>
                <button onClick={this.props.hendleLogOut} className={styles['button']}>Log Out</button>
            </div>
        );
    }
}

export default UserGreatingComponent;
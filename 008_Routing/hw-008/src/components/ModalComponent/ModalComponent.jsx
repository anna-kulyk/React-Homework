import React, { Component } from 'react';
import { connect } from "react-redux";
import styles from "./ModalComponent.module.scss"

class ModalComponent extends Component {

    render() {
        return (
            <div className={styles.modal__background}>
                <div className={styles.modal__container}>
                    {<button className={styles.modal__closeBtn} onClick={this.props.closeBtnHandler}>X</button>}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      modal: state.modal
    }
  }

export default connect(mapStateToProps)(ModalComponent);
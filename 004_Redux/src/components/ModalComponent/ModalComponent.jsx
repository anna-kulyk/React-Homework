import React, { Component } from 'react';
import { connect } from "react-redux";
import styles from "./ModalComponent.module.scss"

class ModalComponent extends Component {

    render() {
        return (
            <div className={styles.modal__background}>
                <div className={styles.modal__container}>
                    <p>{this.props.modalText}</p>
                    {<button className='button' onClick={this.props.closeHandler}>Close</button>}
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
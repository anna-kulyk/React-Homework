import React from 'react';
import './App.css';
import { connect } from "react-redux";
import ModalComponent from './components/ModalComponent/ModalComponent';
import { MODAL1_OPEN, MODAL1_CLOSE, MODAL2_OPEN, MODAL2_CLOSE } from "./constants/actionConstants";


class App extends React.Component {

  render() {
    const {modal, dispatch} = this.props;

    document.addEventListener('keydown', (e)=>{
      if (e.key==="Escape") {
        if (modal.modal1===true) {
          dispatch({type:MODAL1_CLOSE})
        }
        else if (modal.modal2===true) {
          dispatch({type:MODAL2_CLOSE})
        }
      }
    });


    return (
      <div className="App">
        {<button className='button' onClick={()=>dispatch({type:MODAL1_OPEN})}>Open first modal</button>}
        {<button className='button' onClick={()=>dispatch({type:MODAL2_OPEN})}>Open second modal</button>}
        {modal.modal1 && <ModalComponent 
          modalText={'This is the first modal window'} 
          closeHandler={() => dispatch({type:MODAL1_CLOSE})}
        />}
        {modal.modal2 && <ModalComponent 
          modalText={'This is the second modal window'} 
          closeHandler={() => dispatch({type:MODAL2_CLOSE})}
        />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps)(App);

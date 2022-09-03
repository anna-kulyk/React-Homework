import React from 'react';
import './App.css';
import { connect } from "react-redux";
import AppRoutes from './routes/AppRoutes';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AppRoutes />
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

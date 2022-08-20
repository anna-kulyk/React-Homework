import React from 'react';
import './App.css';
import StyledFormComponent from './components/StyledFormComponent/StyledFormComponent';
import UserGreatingComponent from './components/UserGreatingComponent/UserGreatingComponent';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: ''
  }

  handleLogIn = (userName) => {
    this.setState({
      isLoggedIn: true,
      user: userName
    })
  }

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
      user: ''
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn && <StyledFormComponent handleLogIn={this.handleLogIn} />}
        {this.state.isLoggedIn && <UserGreatingComponent userName={this.state.user} handleLogOut={this.handleLogOut} />}
      </div>
    );
  }

}

export default App;

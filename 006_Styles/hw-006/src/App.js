import React from 'react';
import './App.css';
import StyledFormComponent from './components/StyledFormComponent/StyledFormComponent';
import UserGreatingComponent from './components/UserGreatingComponent/UserGreatingComponent';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: ''
  }

  hendleLogIn = (userName) => {
    this.setState({
      isLoggedIn: true,
      user: userName
    })
  }

  hendleLogOut = () => {
    this.setState({
      isLoggedIn: false,
      user: ''
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoggedIn && <StyledFormComponent handleLogIn={this.hendleLogIn} />}
        {this.state.isLoggedIn && <UserGreatingComponent userName={this.state.user} hendleLogOut={this.hendleLogOut} />}
      </div>
    );
  }

}

export default App;

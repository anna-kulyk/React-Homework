import React from 'react';
import './App.css';
import ComponentLifeCycle from './components/ComponentLifeCycle/ComponentLifeCycle';

class App extends React.Component {
  state = {
    isVisible: false
  }

  hendleOnClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <div className="App">
        <button className={'showHideBtn'} onClick={this.hendleOnClick}>Show/Hide</button>
        { this.state.isVisible && <ComponentLifeCycle /> }
      </div>
    )
  }
}

export default App;

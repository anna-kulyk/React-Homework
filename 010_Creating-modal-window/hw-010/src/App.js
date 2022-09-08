import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp/TodoApp';
import { ThemeContext, themes } from './context/ThemeContext';

class App extends React.Component {
  state = {
    theme: themes.blue
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.blue
          ? themes.green
          : themes.blue,
    }));
  };

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state.theme}>
          <button className='button themeChangeBtn' onClick={this.toggleTheme}>Change theme</button>
          <TodoApp />
        </ThemeContext.Provider>
      </div>
    );
  }
}
App.contextType = ThemeContext;

export default App;

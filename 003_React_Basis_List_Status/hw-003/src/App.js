import './App.css';
import List from './components/List/List';
import ComponentWithStatus from './components/ComponentWithStatus/ComponentWithStatus';

const namesList = ['Anna', 'Liam', 'Kate', 'John', 'Emma']

function App() {
  return (
    <div className="App">
      <List names={namesList}/>
      <ComponentWithStatus />
    </div>
  );
}

export default App;

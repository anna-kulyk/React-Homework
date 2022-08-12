import './App.css';
import ComponentWithProps from './components/ComponentWithProps/ComponentWithProps';

function App() {
  return (
    <div className="App">
      <ComponentWithProps text1 = {"Hello"} text2 = {"World"} text3 = {"Anna"}/>
    </div>
  );
}

export default App;

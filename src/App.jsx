import './App.css';
import Birthday from './components/Birthday'

function App() {
  return (
    <div className="App">
      <Birthday firstName = "Jane" lastName = "Doe" age ={45} hairColor = "Black"/>
      <Birthday firstName = "John" lastName = "Smith" age ={88} hairColor = "Brown"/>
    </div>
  );
}

export default App;

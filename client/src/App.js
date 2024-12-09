import './App.css';
import HomePage from './Home/HomePage';
import { Navbar } from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <div className="flex flex-col"> 
          <Navbar></Navbar>
          <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;

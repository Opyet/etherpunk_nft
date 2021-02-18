import logo from './logo.svg';
import './App.css';
import Navigationbar from './Components/Navigationbar';
import FormPage from './Components/FormPage';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <center><FormPage/></center>
    </div>
  );
}

export default App;

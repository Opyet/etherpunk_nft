import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import FormPage from './Components/FormPage';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <center><FormPage/></center>
    </div>
  );
}

export default App;

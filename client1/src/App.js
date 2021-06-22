//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';    //add bootstrap
import AppNavbar from './components/AppNavbar';
import './App.css';
import ShoppingList  from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;


import './App.css';
import HomePage from './Components/pages/HomePage';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CartPage from './Components/pages/CartPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/Cart" element={ <CartPage /> } />
        </Routes>


      </Router>
    </div>
  );
}

export default App;

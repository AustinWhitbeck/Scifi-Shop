
import './App.css';
import HomePage from './Components/pages/HomePage';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CartPage from './Components/pages/CartPage';
import { MasterItemsContextProvider } from './ContextProviders/MasterItemsContext/MasterItemsContext';

function App() {
  return (
    <div className="App">
      <MasterItemsContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/Cart" element={ <CartPage /> } />
          </Routes>


        </Router>
        </MasterItemsContextProvider>
    </div>
  );
}

export default App;

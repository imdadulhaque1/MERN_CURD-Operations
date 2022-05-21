import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from "./components/Header/Header";
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home/Home';
import View from './pages/View';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/view/:id" component={View} />
            <Route exact path="/add" component={AddEdit} />
            <Route exact path="/update/:id" component={AddEdit} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



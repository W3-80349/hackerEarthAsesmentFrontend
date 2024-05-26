import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/Registration/Signup';
import Home from './pages/Home/Home';
import PropertyDetail from './pages/PropertyDetail/PropertyDetail';
import AddProperty from './pages/AddProperty/AddProperty';
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/"><Login/></Route>
            <Route exact path="/signup"><Signup/></Route>
            {/* <Route exact path="/listing"><Home/></Route> */}
            <ProtectedRoute path={"/property/:id"} component={PropertyDetail} ></ProtectedRoute>
            <ProtectedRoute path={"/addproperty"} component={AddProperty} ></ProtectedRoute>
            <ProtectedRoute path={"/home"} component={Home} ></ProtectedRoute>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

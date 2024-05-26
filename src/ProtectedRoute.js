import Login from "./pages/Login/Login"
import { Route } from 'react-router-dom'
function ProtectedRoute({path, component}) {
    var isLoggedIn = false ;
    var token = sessionStorage.getItem('token');
    if(token !== undefined && token !== null){
        isLoggedIn=true;
    }

    if(isLoggedIn){
        return <Route path={path} component={component}></Route>
    }
    else{
        return <Login></Login>
    }
}

export default ProtectedRoute;
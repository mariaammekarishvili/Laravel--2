import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserContextProvider} from "./contexts/UserContext";
import "../../../public/admin_assets/assets/custom.css";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import PrivateRoute from "./dashboard/PrivateRoute";
import Students from "./students/Students";
import EditStudent from "./students/EditStudent";
import Home from "./dashboard/Home";
import Classes from "./classes/Classes";
import ShowClasses from "./classes/ShowClasses";
import MyClasses from "./myClasses/MyClasses";

function App() {
    return (
        <UserContextProvider>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/logout' component={Logout}/>

                <PrivateRoute exact path='/home' component={Home}/>
                <PrivateRoute exact path='/students' component={Students}/>
                <PrivateRoute exact path='/students/:id/edit' component={EditStudent}/>

                <PrivateRoute exact path='/classes' component={Classes}/>
                <PrivateRoute exact path='/classes/:id/show' component={ShowClasses}/>

                <PrivateRoute exact path='/my_class' component={MyClasses}/>
            </Switch>
        </UserContextProvider>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
}

import { Switch } from "react-router-dom";
import Route from './Route'

import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Customers from "../Pages/Customers";

function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={SingIn} />
            <Route exact path="/register" component={SingUp} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/customers" component={Customers} isPrivate/>
            <Route exact path="/profile" component={Profile} isPrivate/>
        </Switch>
    )
}

export default Routes
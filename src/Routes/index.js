import { Switch } from "react-router-dom";
import Route from './Route'

import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Customers from "../Pages/Customers";
import NewCall from "../Pages/New Call";

function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={SingIn} />
            <Route exact path="/register" component={SingUp} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/customers" component={Customers} isPrivate/>
            <Route exact path="/profile" component={Profile} isPrivate/>
            <Route exact path="/newcall" component={NewCall} isPrivate/>
            <Route exact path="/newcall/:callId" component={NewCall} isPrivate/>
        </Switch>
    )
}

export default Routes
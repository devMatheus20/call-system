import { Switch } from "react-router-dom";
import Route from './Route'

import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";
import Dashboard from "../Pages/Dashboard";

function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={SingIn} />
            <Route exact path="/register" component={SingUp} />
            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
        </Switch>
    )
}

export default Routes
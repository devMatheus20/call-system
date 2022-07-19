import { Route, Redirect } from 'react-router-dom'

function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const loading = false
    const singed = false

    if(loading) {
        return (
            <div>1</div>
        )
    }

    if(!singed && isPrivate) {
        return (
            <Redirect to="/" />
        )
    }

    if(singed && isPrivate) {
        return (
            <Redirect to="/dashboard" />
        )
    }


    return <Route {...rest} render={props => <Component {...props}/>}/>
}

export default RouteWrapper
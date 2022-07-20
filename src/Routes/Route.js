import React, { useContext } from 'react'
import { AuthContext } from '../Context/auth'
import { Route, Redirect } from 'react-router-dom'

function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const { singed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div></div>
        )
    }

    if (!singed && isPrivate) {
        return (
            <Redirect to="/" />
        )
    }

    if (singed && !isPrivate) {
        return (
            <Redirect to="/dashboard" />
        )
    }


    return <Route {...rest} render={props => <Component {...props} />} />
}

export default RouteWrapper
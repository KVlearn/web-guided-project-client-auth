import React, { Children } from 'react';
import {Route, Redirect} from 'react-router-dom'

/*
1.this component has the same interface as Route
2.it renders a <Route/> and pass props to it
3.it checks if the user has an authentication token,if they do, 
it renders the passed in component.
4. if the user does not have an authentication token, it redirects to /login

*/
//this destructuring from props obj - to pull the 'component' seperate and the rest of the props in ...props . And rename it as 'Component' so we can render it inside.
// NOTE FOR ME- You should use only one of these props on a given <Route> either render or component or Children, hence choose render and have the component 
// inside .
const PrivateRoute = ({component :Component, ...props})=>{
return <Route {...props}
        render={()=>{
            //logic to check if auth token
            if(localStorage.getItem('token')){
                //render Component
                return <Component />
            }else{
                //redirect to login
                return <Redirect to='/login'/>
            }
        }}/>

}

export default PrivateRoute;
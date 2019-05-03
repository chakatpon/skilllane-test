import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../layouts/Login'
import Student from '../layouts/Student'
import Instructor from '../layouts/Instructor'
import history from '../history'

import bases from '../apis/bases'

class App extends React.Component {

    componentDidMount() {   
        
    }

    s
    
    render() {
        return(
            <div className="container">
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        {true&&<Route path="/student" component={Student}/>}
                        {false&&<Route path="/instructor" component={Instructor}/>}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
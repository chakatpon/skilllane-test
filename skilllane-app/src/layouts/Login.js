import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import bases from '../apis/bases';
import sklLogo from '../assets/img/logo.png';

class Login extends React.Component {

    constructor(props){
      super(props)
      this.userInput = React.createRef();
      this.passInput = React.createRef();
      this.roleInput = React.createRef();
    }

    state = {
        username: '',
        password: '',
        role: 'student',
        user: {},
        isAllow: false
    }
      
    componentDidMount() {       
    
    }

    fetchUser = async (username, password, role) => {
      const user = await bases.get(`/users`,{
        params: { username: username,
                  password: password,
                  role: role}
      });

      
    }

    onLogin = (event) => {
      event.preventDefault();
      this.fetchUser(this.state.username, this.state.password, this.state.role); 
      
      
    }


    render() {
      console.log(String(this.state.username))
        return(
            <div>
                <MDBContainer>
                  <MDBModal isOpen={!this.state.isAllow}>
                    <MDBModalHeader>Login</MDBModalHeader>
                    <MDBModalBody>
                      
                    <form onSubmit={(event) => this.onLogin(event)}>
                        <label htmlFor="username" className="grey-text">
                          User name
                        </label>
                        <input
                          type="text"
                          id="username"
                          className="form-control"
                          onChange={(e) => this.setState({ username: e.target.value})}
                          value={this.state.username}
                        />
                        <br />
                        <label htmlFor="password" className="grey-text">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          ref="passField"
                          className="form-control"
                          onChange={(e) => this.setState({ password: e.target.value})}
                          value={this.state.password}
                        />
                        <label htmlFor="role" className="grey-text mt-4">
                          Role
                        </label>
                        <select 
                          id="role" 
                          className="browser-default custom-select"
                          onChange={(e) => this.setState({ role: e.target.value})}
                          value={this.state.role}>
                            <option value="student">Student</option>
                            <option value="instructor">Instructor</option>
                        </select>

                        <div className="text-center mt-4">
                          <MDBBtn color="primary" type="submit">Login</MDBBtn>
                        </div>
                    </form>


                    </MDBModalBody>
                  </MDBModal>
                </MDBContainer>
            </div>
        );
    }
}

export default Login;
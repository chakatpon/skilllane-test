import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import sklLogo from '../assets/img/logo.png';

class Login extends React.Component {

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <MDBContainer>
                  <MDBModal isOpen={true}>
                    <MDBModalHeader><img src={sklLogo} className="mx-auto d-block" alt="skilllane" /></MDBModalHeader>
                    <MDBModalBody>
                      
                    <form>
                        <label htmlFor="user" className="grey-text">
                          User
                        </label>
                        <input
                          type="email"
                          id="user"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="password" className="grey-text">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                        />
                        <label htmlFor="role" className="grey-text mt-4">
                          Role
                        </label>
                        <select id="role" class="browser-default custom-select ">
                          <option selected value="student">Student</option>
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
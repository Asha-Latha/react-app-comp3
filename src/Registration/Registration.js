import React from 'react';
import { Form, Col, Row, InputGroup, Nav } from 'react-bootstrap';
import Axios from 'axios';
import validator from 'validator';

class Registration extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      mailId: '',
      passWord: '',
      confirmPassword: '',
      loginId: '',
      contactNumber: '',
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  validate = (firstName, lastName, mailId, passWord, confirmPassword, loginId, contactNumber) => {
    const errors = [];
    if (firstName.length <= 0) {
      alert("FirstName should not be empty")
      errors.push("FirstName should not be empty")
    }
    if (lastName.length <= 0) {
      alert("LastName should not be empty")
      errors.push("LastName should not be empty")
    }
    if (loginId.length <= 0) {
      alert("LoginId should not be empty")
      errors.push("LoginId should not be empty")
    }
    if (!validator.isEmail(mailId)) {
      alert("Enter valid Email")
      errors.push("Enter valid Email")
    }
    
  
    
    // if (!validator.isStrongPassword(passWord,
    //   {
    //     minLength: 6, minLowercase: 1,
    //     minUppercase: 1, minNumbers: 1, minSymbols: 1
    //   }
    // )) {
    //   alert("Password is not strong")
    //   errors.push("Password is not strong")
    // }
    // if (passWord !== confirmPassword) {
    //   alert("Password and Confirm Password doesnot match")
    //   errors.push("Password and Confirm Password doesnot match");

    // }
    if (contactNumber.length < 10) {
      alert("Enter valid mobile number")
      errors.push("Enter valid mobile number")
    }
    return errors;
  }

  //setting values to entered values
  getFirstName = (e) => {

    this.setState({ firstName: e.target.value })
    // console.log(e.target.value);

  }
  getLastName = (e) => {

    this.setState({ lastName: e.target.value })
    // console.log(e.target.value);

  }
  getPassWord = (e) => {

    this.setState({ passWord: e.target.value })
    // console.log(e.target.value);

  }
  getMailId = (e) => {

    this.setState({ mailId: e.target.value })
    // console.log(e.target.value);

  }
  getLoginId = (e) => {

    this.setState({ loginId: e.target.value })
    // console.log(e.target.value);

  }
  getcontactNumber = (e) => {

    this.setState({ contactNumber: e.target.value })
    // console.log(e.target.value);

  }

  handleSubmit(e) {
    console.log("Inside register handle submit function")
    e.preventDefault();
    const { firstName, lastName, mailId, passWord,confirmPassword,loginId,contactNumber } = this.state;
    const errors = this.validate(firstName, lastName, mailId, passWord,confirmPassword, loginId,contactNumber);
    if (errors.length > 0) {
        this.setState({ errors });
        return;
    }
    this.register()
  }



  register = () => {
    const errors = [];
    console.log('user registration')
    let registerRequestBody = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "mailId": this.state.mailId,
      "passWord": this.state.passWord,
      "loginId": this.state.loginId,
      "contactNumber": this.state.contactNumber
    }
    console.log(registerRequestBody);

    Axios.post('http://localhost:9500/v1/User/register', registerRequestBody)
      .then(response => {
        console.log("registration done");
        console.log(response);
        this.props.history.push('/login')
      }, error => {
        console.log("got error")
        // console.error(error.message);
        console.log(error.response.data.message);
        alert(error.response.data.message)
        errors.push(error.response.data.message)

      })

  }



  render() {
    const { errors } = this.state;
    return (
      <div
        className="regpage"  >
        <div id="ui">
          {/* <span className="block-example border border-dark"> */}

          <div className="col d-flex justify-content-center " >

            <Form onSubmit={this.handleSubmit} >

            {/* {this.state.data.map(element => {

element.message} */}
              {/* {errors.map(d => <div id="invalid">{d.message}</div>)} */}


              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>


                  <Form.Control name="firstName" placeholder="Enter First name" onChange={this.getFirstName} />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="lastName" placeholder="Enter Last name" onChange={this.getLastName} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Label>Email address</Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">

                    <InputGroup.Prepend>
                      <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="email" name="mailId" placeholder="Enter email" onChange={this.getMailId} />
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Label>Contact Number</Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">

                    <InputGroup.Prepend>
                      <InputGroup.Text><i class="material-icons">phone</i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name="contactNumber" placeholder="Enter contact Number" onChange={this.getcontactNumber} />
                  </InputGroup>
                </Col>

              </Row>
              <Row>
                <Col>
                  <Form.Label>Login Id</Form.Label>

                  <InputGroup className="mb-2 mr-sm-2">

                    <InputGroup.Prepend>
                      <InputGroup.Text><i class="material-icons">person</i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name="loginId" placeholder="Enter loginId" onChange={this.getLoginId} />
                  </InputGroup>
                </Col>
              </Row>



              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">

                    <InputGroup.Prepend>
                      <InputGroup.Text><i class="material-icons">visibility</i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name="passWord" type="password" placeholder="Password" onChange={this.getPassWord} />
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">

                    <InputGroup.Prepend>
                      <InputGroup.Text><i class="material-icons">lock</i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="password" placeholder="Confirm Password" />
                  </InputGroup>
                </Col>
              </Row>
              <div ><br />

                <div >
                  <button className="btn btn-secondary " id="regbutton" >SignUp</button>
                </div>

                <div>
                  <Row>
                    <Col>
                      <p> Already a user??</p>
                    </Col>
                    <Col>
                      <Nav.Link href="/login">Click here to Login </Nav.Link>
                    </Col>
                  </Row>
                </div>


              </div>

            </Form>

          </div>
          {/* </span> */}
        </div>
      </div>
    );
  }
}

export default Registration;
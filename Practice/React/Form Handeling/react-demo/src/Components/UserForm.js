import React, { Component } from 'react'
import { Form, Button, Row, Col, h1 } from 'react-bootstrap'
import '../Form.css'



class UserForm extends Component {




    btnDisabled = () => (
        <Button variant="primary" type="submit" disabled>
            Submit
        </Button>
    )

    btnOn = () => {
        <Button variant="primary" type="submit">
            Submit
        </Button>
    }


    state = {
        firstName: '',
        lastName: '',
        username: '',
        country: '',
        email: '',
        password: '',
        conf_pass: '',
        policies: '',
        gender: ''

    };

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    render() {

        let radios = { 'Male': 'male', 'Female': 'female', 'Other': 'others' }

        let radioBtn = Object.entries(radios).map(([key, value], i) => (

            <Form.Check key={i} inline type="radio" name="gender" onChange={this.handleChange} value={value} label={key} />

        ));

        return (
            <div className="container" >
                <Form className=" formBox">
                    <h1><b>Sign Up</b></h1>
                    <p>It's quick and easy.</p>
                    <hr></hr>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Enter your first name" />
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group controlId="formlastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Enter your last name" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>

                            <Form.Group controlId="formUserId">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" name="userid" value={this.state.userid} onChange={this.handleChange} placeholder="Enter your userid" />
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Country</Form.Label>
                                <Form.Control name='country' onChange={this.handleChange} value={this.state.country} as="select">
                                    <option hidden value=''></option>

                                    <option>Pakistan</option>
                                    <option>Turkey</option>
                                    <option>China</option>
                                    <option>Russia</option>
                                    <option>Iran</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicRadiobox" >
                                <Form.Label>Gender</Form.Label>
                                <br style={{ "padding-top": "5%" }}></br>
                                {radioBtn}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formConfPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="conf_pass" onChange={this.handleChange} placeholder="Confirm your Password" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="policies" onChange={this.handleChange} value="true" label="Accept Policies and Guidelines" />
                    </Form.Group>
                    {/* <Form.Check type="radio" name="gender" onChange={this.handleChange} value="Male" label="Male" />
                        <Form.Check type="radio" name="gender" onChange={this.handleChange} value="Female" label="Female" />
                        <Form.Check type="radio" name="gender" onChange={this.handleChange} value="Others" label="Others" /> */}

                    {/* {this.state.policies === 'on' ? this.btnDisabled : this.btnOn} */}
                    <Button variant="success" type="submit" >
                        Sign Up
                    </Button>


                </Form>

                <br></br>


            </div >


        )
    }
}

export default UserForm

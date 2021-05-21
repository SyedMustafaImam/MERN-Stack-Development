import React, { Component } from 'react'
import { Form, Button, Row, Col, h1 } from 'react-bootstrap'
import '../Form.css'
import loginImage from '../login.png'
import { NavLink } from "react-router-dom";



class LoginForm extends Component {


    state = {

        userid: '',
        password: '',


    };

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    signUp = () => {

    }

    render() {


        return (
            <div className="container" >
                <Row className=" loginBox">
                    <Col style={{ "padding-left": "5%", "margin-right": "10%" }}>
                        <img src={loginImage} style={{ "width": "100%" }} />
                    </Col>
                    <Col >
                        <Form style={{ "width": "60%", "margin-left": "10%" }}>
                            <h1>Log In</h1>
                            <hr></hr>


                            <Form.Group controlId="formUserId">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" name="userid" value={this.state.userid} onChange={this.handleChange} placeholder="Userid or Email address" />
                            </Form.Group>



                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>


                            <Row >
                                <Col xs={5}>
                                    <Button variant="success" type="submit" >
                                        Login
                                    </Button>
                                </Col>
                                <Col >
                                    <Button variant="link">Forgot Password</Button>
                                </Col>
                            </Row>
                            <hr></hr>

                            <NavLink to="/UserForm" ><Button variant="primary" block >
                                Sign Up
                            </Button></NavLink>
                        </Form>
                    </Col>

                </Row>

                <br></br>

                {/* <prev>{JSON.stringify(this.state, null, 2)}</prev> */}

            </div >


        )
    }
}

export default LoginForm

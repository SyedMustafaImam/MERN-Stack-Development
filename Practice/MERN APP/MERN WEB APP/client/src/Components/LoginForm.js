import React, { Component } from 'react'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap'
import '../Form.css'
import axios from 'axios'
import loginImage from '../login.png'
import { NavLink } from "react-router-dom";



class LoginForm extends Component {

    api = axios.create({
        baseURL: 'http://192.168.10.39:5000/',
        timeout: 2000
    })

    state = {

        username: '',
        password: '',


    };

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    checkLogin = () => {
        this.api.post('login', this.state).then(result => {
            console.log('data posted to server')
            console.log('status :', result.statusText);
            console.log('status Code:', result.status);
            if (result.status === 200) {
                return <Alert variant={"success"}> Successfully Loged in </Alert>
            } else {
                return <Alert variant={"danger"}> Invalid Credentials </Alert>

            }
        }).catch(err => console.log(err))

    }

    render() {


        return (
            <div id="logCont" className="container" onSubmit={this.handleSubmit}>
                <Row className=" loginBox">
                    <Col xs={12} md={6} style={{ "padding-left": "5%", "margin-right": "10%" }} >
                        <Image src={loginImage} fluid />
                    </Col>
                    <Col >
                        <Form style={{ "width": "60%", "margin-left": "10%" }}>
                            <h1>Log In</h1>
                            <hr></hr>


                            <Form.Group controlId="formusername">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username or Email address" />
                            </Form.Group>



                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>


                            <Row >
                                <Col xs={5}>
                                    <Button onClick={this.checkLogin} variant="success" type="submit" >
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

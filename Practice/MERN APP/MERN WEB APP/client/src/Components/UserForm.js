import React, { Component } from 'react'
import Axios from 'axios';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import '../Form.css'
import PasswordStrengthBar from 'react-password-strength-bar';

class UserForm extends Component {


    api = Axios.create({
        baseURL: 'http://localhost:5000/',
        timeout: 2000
    })

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
        stylePass: '',
        policies: '',
        gender: '',
        passstats: false,
        formIsFilled: false,
        validated: false,
        getUserfromServer: '',
        isUsernameSame: false,


    };
    handleSubmit = (e) => {
        e.preventDefault();



        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });
    }
    submitData = () => {

        this.api.post('register', this.state).then(result => {

            console.log(`Result on Post => ${result}`)
            console.log(`Result on Post => ${result.data}`)
            this.setState({
                firstName: '',
                lastName: '',
                username: '',
                country: '',
                email: '',
                password: '',
                conf_pass: '',
                stylePass: '',
                policies: '',
                gender: '',
                passstats: false,
                formIsFilled: false,
                validated: false,
                getUserfromServer: '',
                isUsernameSame: false,

            })
        }).catch(err => console.log(err))


    }
    confirmPassword = (e) => {

        this.setState({ conf_pass: e.target.value })
        const confPass = e.target.value
        if (this.state.password === "" || confPass === "") {
            this.setState({ passmath: "" })

        }
        else {
            if (this.state.password !== confPass) {
                this.setState({ passmath: "Password did not matched with your password" })
                this.setState({ passstats: false })
                this.setState({ validated: false });

            }
            // 
            else {
                this.setState({ passmath: "Password Matched!" })
                this.setState({ passstats: true })
                this.setState({ validated: true });

            }
        }
    }
    getUserName = () => {

        this.api.get('checkUser').then(result => {
            console.log('Result From Server in front end/------')
            console.log(result)
            this.setState({ getUserfromServer: result.data })
        }).catch(err => {
            console.log('throwing error')
            console.log(err)
        })
    }

    handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.username !== '' && this.state.country !== '' && this.state.email !== '' && this.state.password !== '' && this.state.conf_pass !== '' && this.state.gender) {
            this.setState({ formIsFilled: true })
        } else {
            this.setState({ formIsFilled: false })

        }

    }

    handleChangeUserName = (e) => {
        const { name, value } = e.target;
        const username = e.target.value;
        this.setState({
            [name]: value
        });
        this.api.post('checkUser', { username: this.state.username }).then(result => console.log(result)).catch(err => console.log(err))

        this.getUserName();
        if (this.state.getUserfromServer === username) {
            this.setState({ isUsernameSame: true })
            this.setState({ usernameError: "User name alread exist!" })


        } else {
            this.setState({ usernameError: "" })
            this.setState({ isUsernameSame: false })

        }

    }



    render() {
        let radios = { 'Male': 'male', 'Female': 'female', 'Other': 'others' }
        let radioBtn = Object.entries(radios).map(([key, value], i) => (
            <Form.Check key={i} inline type="radio" name="gender" required onChange={this.handleChange} value={value} label={key} />
        ));

        return (
            <div className="container mainDiv" >

                <Form noValidate validated={this.state.validated} className=" formBox" onSubmit={this.handleSubmit}>
                    <h1><b>Sign Up</b></h1>
                    <p>It's quick and easy.</p>
                    <hr></hr>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required placeholder="Enter your first name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formlastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required placeholder="Enter your last name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Group controlId="formusername">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{ "height": "29px" }} id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control style={{ "font-size": "10px" }} type="text" name="username" value={this.state.username} onChange={this.handleChangeUserName} required placeholder="Enter username" />
                                    </InputGroup.Prepend>
                                    <Form.Text style={this.state.isUsernameSame !== false ? { "font-size": "9px", "color": "red" } : { "font-size": "9px", "color": "green" }}>
                                        {this.state.usernameError}

                                    </Form.Text>
                                </Form.Group>
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Country</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} name='country' onChange={this.handleChange} required value={this.state.country} as="select">
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
                                <Form.Control style={{ "font-size": "10px" }} type="email" name='email' value={this.state.email} onChange={this.handleChange} required placeholder="Enter email" />
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
                                <Form.Control style={{ "font-size": "10px" }} type="password" name="password" onChange={this.handleChange} required placeholder="Password" />
                                <PasswordStrengthBar password={this.state.password} />

                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formConfPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control style={{ "font-size": "10px" }} type="password" name="conf_pass" onChange={this.confirmPassword} required placeholder="Confirm your Password" validation />
                                <PasswordStrengthBar password={this.state.conf_pass} />
                                <Form.Text style={this.state.passstats !== true ? { "font-size": "9px", "color": "red" } : { "font-size": "9px", "color": "green" }}>
                                    {this.state.passmath}

                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            name="policies"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    {/* <Form.Check type="radio" name="gender" onChange={this.handleChange} value="Male" label="Male" />
                        <Form.Check type="radio" name="gender" onChange={this.handleChange} value="Female" label="Female" />
                        <Form.Check type="radio" name="gender" onChange={this.handleChange} value="Others" label="Others" /> */}

                    {/* {this.state.policies === 'on' ? this.btnDisabled : this.btnOn} */}

                    <Button variant="success" type="submit" onClick={this.submitData} disabled={this.state.formIsFilled === true && this.state.passstats === true ? false : true}>
                        Sign Up
                    </Button>
                </Form>
                <br></br>
                <prev>{JSON.stringify(this.state, null, 2)}</prev>
            </div >
        )
    }
}

export default UserForm

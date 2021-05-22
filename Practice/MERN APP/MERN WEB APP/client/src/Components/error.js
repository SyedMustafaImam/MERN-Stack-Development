import React, { Component } from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import '../error.css'
import { NavLink } from "react-router-dom";

export default function error() {
    return (
        <div className={"errorHeader"}>
            <div className={"errorHeader"}>
                <Container >
                    <Row className={"errorheading justify-content-md-center"}>
                        <h1 className={"errorheading"}>404!</h1>
                    </Row >
                    <Row className={"errorpara justify-content-md-center"}>
                        <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
                            <p>Let's go <a>
                                <NavLink to="/">home</NavLink>
                            </a> and try from there.</p></div>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

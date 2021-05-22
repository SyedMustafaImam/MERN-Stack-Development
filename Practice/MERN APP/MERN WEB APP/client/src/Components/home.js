import React, { Component } from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import '../home.css'

export default function home() {
    return (
        <div className={"homeHeader"}>
            <div className={"homeHeader"}>
                <Container >
                    <Row className={"heading justify-content-md-center"}>
                        <h5 className={"heading"}>Welcome {"Syed Mustafa Imam"}</h5>
                    </Row >
                    <Row className={"para justify-content-md-center"}>
                        <p >
                            To virtual teacher's Virtual Assistant
                        </p>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

import React, { Component } from 'react'
import './Style/calc.css';

export class Calc extends Component {
    state = {
        display: '0'
    }
    handleClick = (e) => {
        let n = Number (e.target.innerText)
        this.setState({
            display: n,
        })
    };

    render() {
        return (
            <div>
                <div className="spacer"></div>
                <div class="input">{this.state.display}</div>
                <div className="spacer"></div>

                <div className="row">
                    <button className="numBtn" onClick={this.handleClick}>C</button>
                    <button className="numBtn" onClick={this.handleClick}>√</button>
                    <button className="numBtn" onClick={this.handleClick}>%</button>
                    <button className="optBtn" onClick={this.handleClick}>÷</button>
                </div>


                <div className="row">
                    <button className="numBtn" onClick={this.handleClick}>1</button>
                    <button className="numBtn" onClick={this.handleClick}>2</button>
                    <button className="numBtn" onClick={this.handleClick}>3</button>
                    <button className="optBtn" onClick={this.handleClick}>+</button>
                </div>

                <div className="row">
                    <button className="numBtn" onClick={this.handleClick}>4</button>
                    <button className="numBtn" onClick={this.handleClick}>5</button>
                    <button className="numBtn" onClick={this.handleClick}>6</button>
                    <button className="optBtn" onClick={this.handleClick}>-</button>
                </div>

                <div className="row">
                    <button className="numBtn" onClick={this.handleClick}>7</button>
                    <button className="numBtn" onClick={this.handleClick}>8</button>
                    <button className="numBtn" onClick={this.handleClick}>9</button>
                    <button className="optBtn" onClick={this.handleClick}>×</button>
                </div>

                <div className="row">
                    <button className="numBtn" onClick={this.handleClick}>0</button>
                    <button className="numBtn" onClick={this.handleClick}>.</button>
                    <button className="optBtn" style={{width:'110px'}} onClick={this.handleClick}>=</button>
                </div>


            </div>
        )
    }
}

export default Calc

import React, { Component } from "react";
import "./Style/calc.css";

export class Calc extends Component {
  state = {
    opr: "",
    nums: [0, 0],
    index: 0,
  };

  handleClick = (e) => {
    const { nums, index } = this.state;
    switch (e.target.innerText) {
      case "+":
      case "-":
        if(this.state.index===1) { 
        let result = this.state.opr === "+"
        ? nums[0] + nums[1]
        : this.state.opr === "-"
        ? nums[0] - nums[1]
        : this.state.opr === "*"
        ? nums[0] * nums[1]
        : nums[0] / nums[1]

        this.setState({display: result, index:1, nums:[result, 0],opr: e.target.innerText  })
    }else{

        this.setState({ opr: e.target.innerText, index: 1 });
    }
      
        break;
      case "×":
        if(this.state.index===1) { 
            let result = this.state.opr === "+"
              ? nums[0] + nums[1]
              : this.state.opr === "-"
              ? nums[0] - nums[1]
              : this.state.opr === "*"
              ? nums[0] * nums[1]
              : nums[0] / nums[1]

            this.setState({display: result, index:1, nums:[result, 0],opr: '*'  })
        }else{
    
            this.setState({ opr: "*", index: 1 });
        }          
        break;
      case "÷":
        if(this.state.index===1) { 
            let result = this.state.opr === "+"
            ? nums[0] + nums[1]
            : this.state.opr === "-"
            ? nums[0] - nums[1]
            : this.state.opr === "*"
            ? nums[0] * nums[1]
            : nums[0] / nums[1]

          this.setState({display: result, index:1, nums:[result, 0],opr: '/'  })
    }else{
    
            this.setState({ opr: "/", index: 1 });
        } 
        break;

      case "=":
        this.setState({
          display:
            this.state.opr === "+"
              ? nums[0] + nums[1]
              : this.state.opr === "-"
              ? nums[0] - nums[1]
              : this.state.opr === "*"
              ? nums[0] * nums[1]
              : nums[0] / nums[1],
        });
        break;
      default:
        let n = Number(e.target.innerText);
        nums[index] = nums[index] * 10 + n;
        this.setState({
          display: nums[index],
        });
    }
  };

  clearDisp = () => {
    this.setState({
      display: "",
      opr: "",
      nums: [0, 0],
      index: 0,
    });
  };

  render() {
    return (
      <div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="input">{this.state.display}</div>
        <div className="backGrd">
          <div className="row">
            <button className="numBtn" onClick={this.clearDisp}>
              C
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              √
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              %
            </button>
            <button className="optBtn" onClick={this.handleClick}>
              ÷
            </button>
          </div>

          <div className="row">
            <button className="numBtn" onClick={this.handleClick}>
              1
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              2
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              3
            </button>
            <button className="optBtn" onClick={this.handleClick}>
              +
            </button>
          </div>

          <div className="row">
            <button className="numBtn" onClick={this.handleClick}>
              4
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              5
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              6
            </button>
            <button className="optBtn" onClick={this.handleClick}>
              -
            </button>
          </div>

          <div className="row">
            <button className="numBtn" onClick={this.handleClick}>
              7
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              8
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              9
            </button>
            <button className="optBtn" onClick={this.handleClick}>
              ×
            </button>
          </div>

          <div className="row">
            <button className="numBtn" onClick={this.handleClick}>
              0
            </button>
            <button className="numBtn" onClick={this.handleClick}>
              .
            </button>
            <button
              className="optBtn"
              style={{ width: "110px" }}
              onClick={this.handleClick}
            >
              =
            </button>
          </div>
        </div>
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Calc;

import React, { Component } from "react";
import { connect } from "react-redux";
 

class Mainpage extends Component {
  state = {
    carnumber: "",
   
  };
  componentDidMount() {
    
  }

  inputChangeHandler = (event) => {
    let value = event.target.value;
    this.checkCarList(value);
    this.setState({ carnumber: value });
  };
  checkCarList = (val) => {
    const cars = this.props.carlist;
  
    let match = cars.filter((k) => Math.floor(k) === Math.floor(val))
    
    if (match > 0) {
      let id = parseInt(match);
    
      this.props.history.push(`${id}`);
    }
  };
      onSubmitHandler = (event) => {
        event.preventDefault()
      }

  render() {
    console.log(this.props.carlist)
    return (
      <div className="main__wrapper fadein">
     
        <h1 className="main__decoration"> Kies  je autonummer..</h1>
        <form className="main__form" onSubmit={this.onSubmitHandler}>
          <input
            className="form__input fadein"
            type="number"
            placeholder="Auto nummer"
            onChange={this.inputChangeHandler}
            value={this.state.carnumber}
          />
        </form>
      <div>
      {/* {this.props.carlist && (
          <ul>
          {this.props.carlist.map((iten, index) => (
              <li key={index}>{iten} </li>
          ))}
        </ul>
      )} */}
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    carlist: state.startlist,
  };
};

export default connect(mapStateToProps ,null)(Mainpage);

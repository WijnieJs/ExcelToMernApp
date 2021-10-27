import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/Button";
class Mainpage extends Component {
  state = {
    carnumber: "",
    emptyMessage: "",
  };
  componentDidMount() {}

  inputChangeHandler = (event) => {
    let value = event.target.value;
    this.checkCarList(value);

    this.setState({ carnumber: value });
  };
  checkCarList = (val) => {
    const cars = this.props.carlist;

    let match = cars.filter((k) => Math.floor(k) === Math.floor(val));
    console.log(match);
    if (val > 2 && match.length == 0) {
      console.log("ne");
      this.setState({
        emptyMessage: "Deze auto is niet ingepland voor vandaag",
      });
    }
    if (match > 0) {
      let id = parseInt(match);

      this.props.history.push(`${id}`);
    }
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    let message = `  Kies een andere ?`;
    this.setState({ emptyMessage: message, carnumber: "" });
  };

  render() {
    return (
      <div className="main__wrapper fadein">
        <h1 className="main__decoration"> Kies je autonummer..</h1>
        <form className="main__form" onSubmit={this.onSubmitHandler}>
          <input
            className="form__input fadein"
            type="number"
            placeholder="Auto nummer"
            onChange={this.inputChangeHandler}
            value={this.state.carnumber}
          />
          {this.state.emptyMessage && (
            <Button design="raised" accent="danger">
              OPNIEUW
            </Button>
          )}
        </form>

        <div>
          {/* {this.props.carlist && (
          <ul>
          {this.props.carlist.map((iten, index) => (
              <li key={index}>{iten} </li>
          ))}
        </ul>
      )} */}
          <h4 className="sub_decoration">{this.state.emptyMessage} </h4>
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

export default connect(mapStateToProps, null)(Mainpage);

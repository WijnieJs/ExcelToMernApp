import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/cars";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
 

class Fullcar extends Component {
  state = {
    car: "",
    loading: true,
    rides:  null 
    
  };
     componentDidMount () {
       // BACKEND API COMMENT BACK IN
     this.props.fetchCarInfo(this.props.match.params.id)
   

    // const copy = [...this.props.allCars[this.props.match.params.id]];
    // const idOfCar = this.props.match.params.id;
    // this.props.prepareForDetail([]);
    // const car = copy;
    // let count = [];

    // for (let i = 0; i < car.length; i++) {
    //   if (car[i][1].includes("Tota")) {
    //     count.push(i);
    //     console.log(count);
    //   }
    // }
    // let list = [];
    // count.unshift(0);
    // for (let i = 0; i < count.length - 1; i++) {
    //   let c = count[i];
    //   let b = count[i + 1];
    //   let r = b - c;
    //   list.push(r);
    // }

    // const final = [];
    // list[0] = list[0] + 1;
    // list.forEach((l) => {
    //   final.push(car.splice(0, l));
    // });
    // const trimmed = [...final];
   
    // let ridesNums = trimmed.length;
    
    this.setState({
       
      loading: false,
       
    });
    console.log(this.props)
  }

  collectNames = (i) => {
    const nameList = [...this.props.rides.rides[i]];
    const obj = [];
    const filterResults = nameList.map((char, index) => {
      if (char[6]) {
        obj.push(char[6]);
      }
    });
    this.props.getCustomInfo(obj)
  };

  pushToDetail = (i) => {
    this.collectNames(i);
    this.props.prepareForDetail(this.props.rides.rides[i]);
    this.props.history.push(`/detail/${this.props.match.params.id}/${i + 1}`);
  };
  renderButtons = () => {
    if (!this.props.rides.rides) return null
    return this.props.rides.rides.map((ride, i) => (
      <div key={i} className="full_car_select_item">
        <Button
          mode="raised"
          design="accent"
          onClick={() => this.pushToDetail(i)}
        >
          Rit {i + 1}
        </Button>
      </div>
    ));
  };
  setRouteBackToMain = () => {
    this.props.history.replace("/");
  };
  render() {
    console.log(this.props)

    let display = (
      <Fragment>
        <Button mode="raised" design="danger" onClick={this.setRouteBackToMain}>
          TERUG
        </Button>
        <div className="Full_car_selectwrapper fadein">
          {!this.state.loading && (
            <h1 className="Full_car_select_title">Auto: {this.props.rides.carId}</h1>
          )}

          {!this.state.loading && this.props.rides ? (
            this.renderButtons()
          ): "Loading"}
        </div>
      </Fragment>
    );
    if (this.state.loading) {
      display = <Spinner />;
    }
    return (
      <Fragment>
        <br />
        <Button mode="raised" onClick={this.collectNames}>
          Check names for laterr
        </Button>
        {display}

        <h5 className="date_s">Datum planning : <span className="date_p">{this.props.date}</span></h5>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
 
    rides: state.rides,
    date: state.date
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    prepareForDetail: (result) => dispatch(actions.prepareForDetail(result)),
    getCustomInfo: (names) => dispatch(actions.getCustomInfo(names)),
    fetchCarInfo:(carid) => dispatch(actions.fetchCarInfo(carid))
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fullcar);

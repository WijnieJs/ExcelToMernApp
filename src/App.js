import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "./store/cars";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./containers/mainpage/Mainpage";
import Fullcar from "./containers/fullcar/Fullcar";
import Cardetail from "./containers/cardetail/Cardetail";
import Layout from "./components/layout/Layout";
import AdminUpload from "./containers/admin/mainAdmin";
import "./styles/main.scss";

// const START = selecter()
class App extends Component {
  state = {
    isSet: false,
    list: [],
  };
  componentDidMount() {
    this.props.setCarIdStartList();

    // const carList = this.props.cars
    // this.props.onInitCars(data);
    // const copycars = { ...data };

    // for (const [key] of Object.entries(copycars)) {
    //   carList.push(parseInt(key));
    // }

    // this.setState({ isSet: true, list: carList }, () => {
    //       this.props.onSetCarList(carList);

    // });
  }
  render() {
    return (
      <Fragment>
        <Layout>
          <Fragment>
            <Switch>
              <Route path="/" exact component={Mainpage} />
              <Route path="/:id" exact component={Fullcar} />
              <Route path="/detail/:id/:rit" exact component={Cardetail} />
              <Route path="/admin/a/pw" exact component={AdminUpload} />
            </Switch>
          </Fragment>
        </Layout>
      </Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCarIdStartList: () => dispatch(actions.setCarIdStartList()),
  };
};
export default connect(null, mapDispatchToProps)(App);

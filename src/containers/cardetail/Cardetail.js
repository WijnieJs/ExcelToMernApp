import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
    
import Grid from "../../components/grid/grid";
import * as actions from "../../store/cars";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";


class Cardetail extends Component {
  state = {
    help: [],
    loading: true,
  };
  componentDidMount() {
    const copy = [...this.props.detail];
    const r = copy;
    
    const keys = [
      "auto",
      "rit",
      "#",
      "laadplaats",
      "#",
      "soort",
      "klant",
      "plaats",
      "vanaf",
      "tm",
      "ritnum",
      "gewicht",
    ];

    const h = [];
    
    const doItLikeThat = (fr) => {
        return fr.map((cl, index) => {
              let keyr = {};
               cl.map((m, i) => {
                keyr[keys[i]] = m;
                return cl
              });
             return h.push({ keyr });
            });
            
    }
    doItLikeThat(r)

    if (h.length > 0) {
      this.props.onSetHelpState(h);
    }
    //////// heree
    this.setState({
      loading: false,
    });
  }
  routBackToSelectors = () => {
    this.props.history.goBack();
  };
  render() {
    let display = <Spinner />;
    if (!this.state.loading) {
      display = <Grid help={this.props.helper} />;
    }
  
    return (
      <Fragment>
        {/*  MMODALLL HERE WITH FEED AND EDIT*/} 
        <div className="backSlidePanel">
          <Button
            mode="raised"
            design="accent"
            onClick={this.routBackToSelectors}
          >
            Terug naar ritten
          </Button>
        </div>
        {display}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
    helper: state.helper,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetHelpState: (helper) => dispatch(actions.setHelpState(helper)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cardetail);

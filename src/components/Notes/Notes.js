import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/cars";
import Button from "../button/Button"
class Notes extends Component {
   state = {
     noteName: []
   }
  componentDidMount() {
    // console.log(this.props.name)
    // let oldstate = this.state.noteName;
    // let newstate = 
    //   this.setState({
    //     noteName:  newNames
    //   })
  }
  getCustomNotes = (name) => {
    console.log(name)
    // this.props.getPersonNote(this.props.name)
  }
  render() {
    console.log(this.state.noteName)
    return (
      <div>
          <Button design="accent" onClick={() => this.props.getPersonNote(this.props.name)}>
              INFO
            </Button>
      </div>
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
    getPersonNote : (person) => dispatch(actions.setPersonNotes(person)),
  };
};
 

export default connect(mapStateToProps, mapDispatchToProps)(Notes);

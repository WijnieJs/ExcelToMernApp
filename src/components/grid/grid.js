import React, { Component,  Fragment} from 'react';
import {connect} from 'react-redux';
import CardCar from "./CardCar";
import Spinner from "../../components/spinner/Spinner"
import * as actions from "../../store/cars";

import FeedEdit from "../FeedEdit/FeedEdit"
class Grid extends Component {
  state = {
    ritten: [],
    loading: true,
    openModal: false,
    name: ""
  };

  componentDidMount() {
    console.log('here')
    const arr = [];
    for (let i = 0; i < this.props.help.length; i++) {
      arr.push(this.props.help[i].keyr);
    }
    const newState = arr;
    this.setState({ ritten: newState, loading: false });

  }
  
  closeModalHandler = () => {
    this.setState({openModal: false})
  }
  openInfoModalHandler = (name) => {
 
  
    this.setState({openModal: true })
  }
  render() {
 
    let displaygrid = (
<Fragment>
        {this.state.ritten.map((rit, i) => (    
        <div  key={rit.gewicht + i} className="card_wrapper_out ">    
          <CardCar
            auto={rit.auto}
            gewicht={rit.gewicht}
            klant={rit.klant}
            laadplaats={rit.laadplaats}
            plaats={rit.plaats}
            rit={rit.rit}
            soort={rit.soort}
            tm={rit.tm}
            vanaf={rit.vanaf}
            openInfoModal={() => this.openInfoModalHandler(rit.klant)}
          
          />
         </div> 
        ) ) }
          
      </Fragment>
    )
    if (this.state.loading) {
      displaygrid = <Spinner />
    }

    return (
           <Fragment >
              <FeedEdit
          editing={this.state.openModal}
          selectedPost={this.state.name}
          loading={this.state.editLoading}
          onCancelEdit={this.closeModalHandler}
          onFinishEdit={this.closeModalHandler}
        />


             {displaygrid}
           
           </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.names,
    allCars: state.cars,
  };
};
 


export default connect(mapStateToProps, null)(Grid);

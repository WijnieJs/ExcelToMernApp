import React, { Component, Fragment } from "react";
import Button from "../button/Button";
import Notes from "../Notes/Notes"
 
class CardCar extends Component {
  render() {
    return (
      <div className="cardcar__wrapper fadein">
        {this.props.rit ? (
          <h3 className="cardcar__rit fadein">
            RIT -<span className="card__rit_xl"> {this.props.rit} </span>{" "}
          </h3>
        ) : null}
        {this.props.laadplaats ? (
          <h1 className="cardcar__laad"> {this.props.laadplaats}</h1>
        ) : null}

        {this.props.klant ? (
          <Fragment>
              <Notes name={this.props.klant}/>
            <h1 className="cardcar__klant">{this.props.klant} </h1>
        
          </Fragment>
        ) : null}

        {this.props.plaats ? (
          <h2 className="cardcar_p_plaats">Plaats - {this.props.plaats}</h2>
        ) : null}
        {this.props.soort ? (
          <p className="cardcar_p">soort - {this.props.soort}</p>
        ) : null}
        {this.props.tm ? (
          <p className="cardcar_p">Datum tot - {this.props.tm}</p>
        ) : null}

        {this.props.gewicht ? (
          <p className="cardcar_p">
            Gewicht -{" "}
            <span className="cardcar_g">
              <strong>{this.props.gewicht}</strong>
            </span>{" "}
          </p>
        ) : null}
      </div>
    );
  }
}

export default CardCar;

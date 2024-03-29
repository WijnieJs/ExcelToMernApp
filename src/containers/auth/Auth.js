import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import Authinput from "../../components/Form/Input/Authinput";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import classes from "./Auth.module.css";
// import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "name",
          placeholder: "Admin",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: false,
  };

  componentDidMount() {}

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    // if (rules.isEmail) {
    //   const pattern =
    //     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //   isValid = pattern.test(value) && isValid;
    // }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };
  // is ext
  submitHandler = (event) => {
    event.preventDefault();

    // this.props.onAuth(
    //   this.state.controls.email.value,
    //   this.state.controls.password.value,
    //   this.state.isSignUp
    // );
    console.log(this.state.controls);
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    console.log(this.state);
    let form = formElementsArray.map((formElement) => (
      <Authinput
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
      />
    ));

    // if (this.props.loading) {
    //   form = <Spinner />;
    // }

    let errorMessage = null;

    // if (this.props.error) {
    //   errorMessage = <p>{this.props.error.message}</p>;
    // }
    let authRedirect = null;
    // if (this.props.isAuthenticated) {
    //   authRedirect = <Redirect to={this.props.authRedirectPath} />;
    // }

    return (
      <div className={classes.Auth}>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success" mode="raised ">
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAuth: (email, password, isSignUp) =>
    //   dispatch(actions.auth(email, password, isSignUp)),
    // onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

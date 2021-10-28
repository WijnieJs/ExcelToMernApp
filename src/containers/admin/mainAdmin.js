import React, { Component } from "react";

import FileLoad from "./fileLoad";

class Admin extends Component {
  state = {
    data: [],
    message: "",
  };

  fileUploadHandler = (filedata) => {
    let resultcars = [...filedata];
    this.setState({ data: resultcars });
  };
  fileUploadEmptySucces = (states) => {
    this.setState({ message: states });
  };
  selectFileData = () => {
    const cars = this.state.data;
    console.log(cars.length);
    let url = "http://localhost:5000/feed/post";
    let method = "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cars),
    })
      .then((res) => {
        this.setState({ message: "Planing toegegevoegd met succes" });
      })
      .catch((error) => {
        this.setState({ message: "Helaas, niet gelukt." });
      });
  };
  backToMain = (props) => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.state);
    return (
      <>
        <button
          style={{
            width: "80px",
            height: "30px",
            position: "absolute",
            right: "10px",
            top: "10px",
            color: "black",
            backgroundColor: "red",
            border: "none",
            outline: "none",
          }}
          onClick={this.backToMain}
        >
          TERUG
        </button>
        <div className="admin-out-flex">
          <FileLoad
            uploadHanler={this.fileUploadHandler}
            onEmpty={this.fileUploadEmptySucces}
          />
          <button
            className="file-button"
            style={{}}
            onClick={this.selectFileData}
          >
            OPSLAAN
          </button>
          <h4 className="display-message">{this.state.message}</h4>
        </div>
      </>
    );
  }
}

export default Admin;

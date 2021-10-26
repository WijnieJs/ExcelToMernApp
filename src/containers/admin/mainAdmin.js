import React, { Component } from "react";

import FileLoad from "./fileLoad";

class Admin extends Component {
  state = {
    data: [],
  };

  fileUploadHandler = (filedata) => {
    let resultcars = [...filedata];
    this.setState({ data: resultcars });
  };

  selectFileData = () => {
    const cars = this.state.data;

    //  formData.append('list', data.startlist);
    console.log(cars);
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
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <FileLoad uploadHanler={this.fileUploadHandler} />
        <button className="fileButton" onClick={this.selectFileData}>
          UPLOOOOAADDDDCHANGGER
        </button>
      </div>
    );
  }
}

export default Admin;

import React, { Component } from "react";
import { CSVReader } from "react-papaparse";

const buttonRef = React.createRef();

class FileLoader extends Component {
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (datafiles) => {
    console.log("---------------------------");
    console.log("DOONE");
    console.log("---------------------------");
    let d = [...datafiles];

    let result = [];
    d.forEach((obj) => {
      result.push(obj.data);
    });
    this.props.uploadHanler(result);
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(file);
    console.log(inputElem);
    console.log(reason);
    console.log(err);
    console.log("---------------------------");
  };

  handleOnRemoveFile = (data) => {
    this.props.onEmpty("");
    console.log(data);
    console.log("---------------------------");
  };

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <>
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          {({ file }) => (
            <aside className="admin-aside">
              <button
                type="button"
                onClick={this.handleOpenDialog}
                className="csvparsebutton"
              >
                SELECTEER BESTAND PLANNING HIER
              </button>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#ccc",
                  height: 45,
                  lineHeight: 2.5,
                  marginTop: 5,
                  marginBottom: 35,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: "88%",
                }}
              >
                {file && file.name}
                {!file && <p>...</p>}
              </div>
              <button
                className="file-button-empty"
                onClick={this.handleRemoveFile}
              >
                LEEG MAKEN
              </button>
            </aside>
          )}
        </CSVReader>
      </>
    );
  }
}

export default FileLoader;

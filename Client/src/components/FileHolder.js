import React, { useState, useContext } from 'react';
import { useCallback } from 'react';
import { FileContext } from '../hooks/FileContext';
import FullPageLoader from '../hooks/FullPageLoader';
import "../css/fileHolder.css";
import Dropzone from "react-dropzone";
import axios from "axios";

// Convert file to base64 string
const fileToBase64 = (file) => {
  return new Promise(resolve => {
    var reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
};

const FileHolder = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileData, setFileData] = useState({ fileType: "", fileContent: "" });
  const [result, setResult] = useContext(FileContext);
  const [loader, showLoader, hideLoader] = FullPageLoader();
  const handleDrop = useCallback(files => {
    console.log("File Uploaded");
    showLoader();
    setSelectedFile(files[0].name);

    var file = files[0];
    console.log(file);
    fileToBase64(file)
      .then(result => {
        var data = result.split(",")
        setFileData({ fileType: file.type, fileContent: data[1] });
        grabKeyValuePairs({ fileType: file.type, fileContent: result });
      });

  }, [])

  const grabKeyValuePairs = async (fileData) => {
    var details = fileData;

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    await axios.post('/api/converttotext', formBody,  {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
      .then(response =>{
        setResult({fileContent:response.data.result})
        console.log(response.data.result)
      },
        (error) => {
          window.alert(error);
        })
      .finally(() => {
        hideLoader();
      });
  };

  return (
    <div className="FileHolder-header">
      <Dropzone onDrop={handleDrop}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
              ? "reject"
              : "";

          return (
            <div
              {...getRootProps({
                className: `Fileholder-dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "🗁" : "🗀"}</span>
              <p>Drag'n'drop images, or click to select files</p>
              {selectedFile}
            </div>
          );
        }}
      </Dropzone>
      <div>
        {loader}
      </div>
    </div>
  );
}

export default FileHolder;
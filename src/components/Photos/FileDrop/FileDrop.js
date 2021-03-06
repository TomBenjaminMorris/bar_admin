import React, { useCallback, Fragment } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./FileDrop.css";
// import LoaderSpinner from "../LoaderSpinner/LoaderSpinner.js";

function readmultifiles(files, setPhotos, photos) {
  var reader = new FileReader();
  function readFile(index) {
    if (index >= files.length) return;
    var file = files[index];
    reader.onload = function (e) {
      // get file content
      var bin = e.target.result;
      setPhotos((photos) => [...photos, bin]);
      // do sth with bin
      readFile(index + 1);
    };
    reader.readAsDataURL(file);
  }
  readFile(0);
}

function FileDrop(props) {
  const onDrop = useCallback((acceptedFiles) => {
    readmultifiles(acceptedFiles, props.setPhotos, props.photos);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Fragment>
      <div
        className={`${classes.dropzoneBox} ${
          props.photos.length ? classes.minimizeDropzoneBox : ""
        }`}
        {...getRootProps({ refKey: "innerRef" })}
      >
        <input className={classes.dropzoneButton} {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </Fragment>
  );
}

export default FileDrop;

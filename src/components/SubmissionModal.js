import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropzone from "react-dropzone";
import { makeSubmission } from '../redux/actions/eventActions';
import '../styles/SubmissionModal.css';

const SubmissionModal = (props) => {
  const { event, setSubmissionModal } = props;
  const dispatch = useDispatch();

  const [pdfFiles, setPdfFiles] = useState([]);
  const [pdfFileNames, setPdfFileNames] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [videoFileNames, setVideoFileNames] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageFileNames, setImageFileNames] = useState([]);

  const handlePdfDrop = (acceptedFiles) => {
    setPdfFiles(acceptedFiles);
    setPdfFileNames(acceptedFiles.map(file => file.name));
  };

  const handleVideoDrop = (acceptedFiles) => {
    setVideoFiles(acceptedFiles);
    setVideoFileNames(acceptedFiles.map(file => file.name));
  };

  const handleImageDrop = (acceptedFiles) => {
    setImageFiles(acceptedFiles);
    setImageFileNames(acceptedFiles.map(file => file.name));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    for (const key of Object.keys(imageFiles)) {
      formData.append('submission', imageFiles[key])
    }
    for (const key of Object.keys(pdfFiles)) {
      formData.append('submission', pdfFiles[key])
    }
    for (const key of Object.keys(videoFiles)) {
      formData.append('submission', videoFiles[key])
    }
    dispatch(makeSubmission(event.id, formData));
    setSubmissionModal(false);
  };

  return (
    <div className="SubmissionModal">
      <div className="SubmissionModal-content">
        <h1>Make your submissions</h1>
        {event.pdfSubmission === 1 && (
          <div className="SubmissionModal-input-container">
            <p className="SubmissionModal-input-text">
              You can upload a maximum of {event.pdfLimit} pdf files
            </p>
            <Dropzone
              onDrop={handlePdfDrop}
              accept='application/pdf'
              maxFiles={event.pdfLimit}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag'n'drop files, or click to select files</p>
                </div>
              )}
            </Dropzone>
            <div className="selected-files-div">
              <span style={{ color: 'black' }}>Selected files : </span>
              {pdfFileNames.map(fileName => (
                <span key={fileName}>{fileName}</span>
              ))}
            </div>
          </div>
        )}
        {event.videoSubmission === 1 && (
          <div className="SubmissionModal-input-container">
            <p className="SubmissionModal-input-text">
              You can upload a maximum of {event.videoLimit} videos
            </p>
            <Dropzone
              onDrop={handleVideoDrop}
              accept='video/mp4'
              maxFiles={event.videoLimit}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag'n'drop files, or click to select files</p>
                </div>
              )}
            </Dropzone>
            <div className="selected-files-div">
              <span style={{ color: 'black' }}>Selected files : </span>
              {videoFileNames.map(fileName => (
                <span key={fileName}>{fileName}</span>
              ))}
            </div>
          </div>
        )}
        {event.imageSubmission === 1 && (
          <div className="SubmissionModal-input-container">
            <p className="SubmissionModal-input-text">
              You can upload a maximum of {event.imageLimit} images
            </p>
            <Dropzone
              onDrop={handleImageDrop}
              accept='image/*'
              maxFiles={event.imageLimit}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag'n'drop files, or click to select files</p>
                </div>
              )}
            </Dropzone>
            <div className="selected-files-div">
              <span style={{ color: 'black' }}>Selected files : </span>
              {imageFileNames.map(fileName => (
                <span key={fileName}>{fileName}</span>
              ))}
            </div>
          </div>
        )}
        <div className="SubmissionModal-button-div">
          <button onClick={() => setSubmissionModal(false)}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;

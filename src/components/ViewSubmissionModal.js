import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';
import { editSubmission } from '../redux/actions/eventActions';
import '../styles/SubmissionModal.css';

const ViewSubmissionModal = (props) => {
  const { event, setViewSubmissionsModal, submissionDetails, submissionID } =
    props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [editSubmissions, setEditSubmissions] = useState(false);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [pdfFileNames, setPdfFileNames] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [videoFileNames, setVideoFileNames] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageFileNames, setImageFileNames] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [changesOn, setChangesOn] = useState({
    image: 0,
    pdf: 0,
    video: 0,
  });

  const handlePdfDrop = (acceptedFiles) => {
    setPdfFiles(acceptedFiles);
    setPdfFileNames(acceptedFiles.map((file) => file.name));
    setChangesOn({ ...changesOn, pdf: 1 });
  };

  const handleVideoDrop = (acceptedFiles) => {
    setVideoFiles(acceptedFiles);
    setVideoFileNames(acceptedFiles.map((file) => file.name));
    setChangesOn({ ...changesOn, video: 1 });
  };

  const handleImageDrop = (acceptedFiles) => {
    setImageFiles(acceptedFiles);
    setImageFileNames(acceptedFiles.map((file) => file.name));
    setChangesOn({ ...changesOn, image: 1 });
  };

  const handleSubmit = () => {
    const formData = new FormData();

    if (
      event.imageSubmission &&
      imageFiles.length > 0 &&
      imageFiles.length === event.imageLimit
    ) {
      for (const key of Object.keys(imageFiles)) {
        formData.append('submission', imageFiles[key]);
      }
    }

    if (
      event.videoSubmission &&
      videoFiles.length > 0 &&
      videoFiles.length === event.videoLimit
    ) {
      for (const key of Object.keys(videoFiles)) {
        formData.append('submission', videoFiles[key]);
      }
    }

    if (
      event.pdfSubmission &&
      pdfFiles.length > 0 &&
      pdfFiles.length === event.pdfLimit
    ) {
      for (const key of Object.keys(pdfFiles)) {
        formData.append('submission', pdfFiles[key]);
      }
    }

    formData.append('isImage', changesOn.image);
    formData.append('isVideo', changesOn.video);
    formData.append('isPdf', changesOn.pdf);
    formData.append('submissionID', submissionID);

    if (changesOn.image === 1 || changesOn.video === 1 || changesOn.pdf === 1) {
      dispatch(editSubmission(event.id, formData));
      setIsSubmitted(true);
      setTimeout(() => {
        setViewSubmissionsModal(false);
        setIsSubmitted(false);
        history.push('/');
      }, 3000);
    } else {
      alert("You haven't choose required number of files");
    }
  };

  const handleCancel = () => {
    setEditSubmissions(false);
    setImageFiles([]);
    setImageFileNames([]);
    setPdfFiles([]);
    setPdfFileNames([]);
    setVideoFiles([]);
    setVideoFileNames([]);
  };

  return (
    <div className='SubmissionModal'>
      <div className='SubmissionModal-content'>
        {!isSubmitted ? (
          <Fragment>
            {editSubmissions ? (
              <Fragment>
                <h1>Make your submissions</h1>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '1rem',
                    margin: '1rem 0',
                    marginBottom: '1.5rem',
                    color: 'grey',
                  }}
                >
                  Upload documents that you want to change
                </p>
                {(event.pdfSubmission === 1 ||
                  event.pdfSubmission === true) && (
                  <div className='SubmissionModal-input-container'>
                    <p className='SubmissionModal-input-text'>
                      You can upload a maximum of {event.pdfLimit} pdf files
                    </p>
                    <Dropzone
                      onDrop={handlePdfDrop}
                      accept='application/pdf'
                      maxFiles={event.pdfLimit}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: 'dropzone' })}>
                          <input {...getInputProps()} />
                          <p>Drag'n'drop files, or click to select files</p>
                        </div>
                      )}
                    </Dropzone>
                    <div className='selected-files-div'>
                      <span style={{ color: 'black' }}>Selected files : </span>
                      {pdfFileNames.map((fileName) => (
                        <span key={fileName}>{fileName}</span>
                      ))}
                    </div>
                  </div>
                )}
                {(event.videoSubmission === 1 ||
                  event.videoSubmission === true) && (
                  <div className='SubmissionModal-input-container'>
                    <p className='SubmissionModal-input-text'>
                      You can upload a maximum of {event.videoLimit} videos
                    </p>
                    <Dropzone
                      onDrop={handleVideoDrop}
                      accept='video/mp4'
                      maxFiles={event.videoLimit}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: 'dropzone' })}>
                          <input {...getInputProps()} />
                          <p>Drag'n'drop files, or click to select files</p>
                        </div>
                      )}
                    </Dropzone>
                    <div className='selected-files-div'>
                      <span style={{ color: 'black' }}>Selected files : </span>
                      {videoFileNames.map((fileName) => (
                        <span key={fileName}>{fileName}</span>
                      ))}
                    </div>
                  </div>
                )}
                {(event.imageSubmission === 1 ||
                  event.imageSubmission === true) && (
                  <div className='SubmissionModal-input-container'>
                    <p className='SubmissionModal-input-text'>
                      You can upload a maximum of {event.imageLimit} images
                    </p>
                    <Dropzone
                      onDrop={handleImageDrop}
                      accept='image/*'
                      maxFiles={event.imageLimit}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: 'dropzone' })}>
                          <input {...getInputProps()} />
                          <p>Drag'n'drop files, or click to select files</p>
                        </div>
                      )}
                    </Dropzone>
                    <div className='selected-files-div'>
                      <span style={{ color: 'black' }}>Selected files : </span>
                      {imageFileNames.map((fileName) => (
                        <span key={fileName}>{fileName}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className='SubmissionModal-button-div'>
                  <button onClick={handleCancel}>Cancel</button>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </Fragment>
            ) : (
              <div className='viewsubmission-container'>
                <h1>Your submissions</h1>

                {(event.pdfSubmission === 1 ||
                  event.pdfSubmission === true) && (
                  <div className='viewsubmission-input-container'>
                    <p className='viewsubmission-input-text'>Uploaded Pdf</p>
                    <div className='viewsubmission-documentsDiv'>
                      {submissionDetails.pdf.map((detail, index) => (
                        <a
                          href={detail}
                          className='submissionLinks'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          PDF - {index + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {(event.videoSubmission === 1 ||
                  event.videoSubmission === true) && (
                  <div className='viewsubmission-input-container'>
                    <p className='viewsubmission-input-text'>Uploaded Videos</p>
                    <div className='viewsubmission-documentsDiv'>
                      {submissionDetails.video.map((detail, index) => (
                        <a
                          href={detail}
                          className='submissionLinks'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Video - {index + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {(event.imageSubmission === 1 ||
                  event.imageSubmission === true) && (
                  <div className='viewsubmission-input-container'>
                    <p className='viewsubmission-input-text'>Uploaded Images</p>
                    <div className='viewsubmission-documentsDiv'>
                      {submissionDetails.images.map((detail, index) => (
                        <a
                          href={detail}
                          className='submissionLinks'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Image - {index + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className='SubmissionModal-button-div'>
                  <button onClick={() => setViewSubmissionsModal(false)}>
                    Back
                  </button>
                  <button onClick={() => setEditSubmissions(true)}>Edit</button>
                </div>
              </div>
            )}
          </Fragment>
        ) : (
          <div className='submitted-text'>
            <h1> Thank you for your submission</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSubmissionModal;

import React from 'react';
import '../styles/ResultsModal.css';

const ResultsModal = (props) => {
  const { event, setResultsModal } = props;
  const submissions = JSON.parse(event.winnerSubmission);
  return (
    <div className="ResultsModal">
      <div className="ResultsModal-content">
        <h1>Result</h1>
        <div
          dangerouslySetInnerHTML={{ __html: event.result }}
          className="result-box"
        ></div>
        <div className="submissions-container">
          {submissions.images.map(img => (
            <div className="submission-item">
              <img src={img} alt="submission-img" className="submission-img" />
            </div>
          ))}
          {submissions.video.map(vid => (
            <div className="submission-item">
              <video
                controls
                controlsList="nodownload"
                className="submission-video"
              >
                <source src={vid} />
              </video>
            </div>
          ))}
          {submissions.pdf.map(file => (
            <div className="submission-item">
              <iframe
                className="submission-pdf"
                src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                scrolling="auto"
                frameBorder="0"
                height="100%"
                width="100%"
                title="winner-submission-pdf"
              ></iframe>
            </div>
          ))}
        </div>
        <div className="ResultsModal-button-div">
          <button onClick={() => setResultsModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;

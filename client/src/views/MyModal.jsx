import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ show, video, setShowModal }) => {
  
  if (!video) return ""
  
  const markUp = () => {
    return { __html: video.snippet.title }
  };

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Modal show={show} onHide={() => setShowModal(false)} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title><span dangerouslySetInnerHTML={markUp()}></span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoSrc} title={video.snippet.title}/>
        </div>
        {video.snippet.description}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Close Modal</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default MyModal;

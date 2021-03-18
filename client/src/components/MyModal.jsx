import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ show, video, setShowModal }) => {
  console.log(`video`, video)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const markUp = () => {
    return { __html: video.snippet.title }
  }
  if (video === null) return ""

  return (
    <Modal show={show} onHide={() => setShowModal(false)} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title><span dangerouslySetInnerHTML={markUp()}></span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src={videoSrc}></iframe>
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

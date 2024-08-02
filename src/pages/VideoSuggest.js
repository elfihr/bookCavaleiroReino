import React, { useState } from 'react'
import Modal from 'react-modal'
import '../style/VideoSuggest.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

const VideoSuggest = () => {
  Modal.setAppElement('#root')

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className='video01'>
      <div className='video_intro'>
        <h3>Ler um bom livro é sempre bom</h3>
        <p>Veja Opinião dos de alguns leitores por video</p>
      </div>
      <i className="fa-solid fa-circle-play" onClick={openModal}>
        <span className='pulse'></span>
      </i>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modalwindow'
        overlayClassName='modaBackground'
        contentLabel="Modal"
      >
     
        <Container>
        <div className='closeContainer'>
          <button className='closeModal' onClick={closeModal}>X</button>
        </div>
          <div className="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0AiOrh63xVQ?si=V-VtXX0M1WMyT8Zt" title="YouTube video player" allowFullScreen></iframe>
          </div>
        </Container>
      </Modal>

    </section>
  )
}

export default VideoSuggest
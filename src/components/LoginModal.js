import React from 'react';
import Modal from 'react-modal';
import '../styles/LoginModal.scss';

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login"
      className="login-modal"
      overlayClassName="login-modal-overlay"
      ariaHideApp={false}
    >
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-submit-btn">Login</button>
      </form>
      <button onClick={onClose} className="close-modal-btn">Close</button>
    </Modal>
  );
};

export default LoginModal;
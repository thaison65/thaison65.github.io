import React, { useEffect } from 'react';

import './Modal.scss';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, show = false, title, onClose } = props;

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!show) {
    return;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <section className="modal-header">
          <div></div>
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </section>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

import "../styles/modal.css"; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        {children}
      </div>
    </>
  );
};

export default Modal;
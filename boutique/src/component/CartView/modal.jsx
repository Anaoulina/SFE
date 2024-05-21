import React from 'react';
import './Modal.css';

const Modal = ({ children, handleClose, show }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
            <button type="button" onClick={handleClose}>Close</button>
                {children}
            </section>
        </div>
    );
};

export default Modal;

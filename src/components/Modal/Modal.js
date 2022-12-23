import { Modal } from 'react-bootstrap';

const Dialog = ({ closeable, title, children, footer, show, keyboard, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={keyboard}
        >
            {
                title &&
                <Modal.Header closeButton={closeable}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            }
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                {footer}
            </Modal.Footer>
        </Modal>
    );
}

Dialog.defaultProps = {
    keyboard: true,
    closeable: true,
}

export default Dialog;
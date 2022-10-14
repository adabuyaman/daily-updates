import PropTypes from 'prop-types';

const OffCanvas = ({ title, children, id }) => {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id={id}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {children}
            </div>
        </div>
    );
}

OffCanvas.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default OffCanvas;
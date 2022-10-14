import PropTypes from 'prop-types';
import "./Attribute.scss";

const Attribute = ({ iconClass, label }) => {
    const cssPrefix = "attribute";

    return (
        <div className={cssPrefix}>
            <i className={`${cssPrefix}__icon ${iconClass}`}></i>
            <span className={`${cssPrefix}__label`}>{label}</span>
        </div>
    )
}
Attribute.propTypes = {
    iconClass: PropTypes.string,
    label: PropTypes.string,
};
Attribute.defaultProps = {
    iconClass: '',
    label: '',
};

export default Attribute;
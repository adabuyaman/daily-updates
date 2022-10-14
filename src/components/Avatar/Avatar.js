import PropTypes from 'prop-types';
import "./Avatar.scss";
import AvatarSkeleton from './Avatar.skeleton';

const Avatar = ({ letter, name, color, size, loading }) => {
    const cssPrefix = "avatar";

    const handleLetter = (str) => {
        return str ? str[0] : '';
    }

    if (loading)
        return (
            <AvatarSkeleton />
        )

    return (
        <div
            className={cssPrefix}
            data-bs-toggle="tooltip"
            style={{ backgroundColor: color }}
            title={name}
        >
            {letter ?? handleLetter(name)}
        </div>
    )
}
Avatar.propTypes = {
    letter: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
};
Avatar.defaultProps = {
    color: 'pink',
    size: 'small',
};

export default Avatar;
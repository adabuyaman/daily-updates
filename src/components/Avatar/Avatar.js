import { Tooltip, OverlayTrigger } from 'react-bootstrap';
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
        <OverlayTrigger overlay={<Tooltip>{name}</Tooltip>}>
            <div
                className={cssPrefix}
                style={{ backgroundColor: color }}
            >
                {letter ?? handleLetter(name)}
            </div>
        </OverlayTrigger>
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
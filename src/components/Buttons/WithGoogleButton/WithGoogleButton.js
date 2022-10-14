import "./WithGoogleButton.scss";

const WithGoogleButton = ({ label = 'Sign in with Google', onClick }) => {
    const cssPrefix = 'withGoogleButton';
    return (
        <button type="button" className={`${cssPrefix} btn btn-outline-primary btn-w-icon`} onClick={onClick}>
            <i className="lab btn-icon la-google-plus-g"></i>
            <span>{label}</span>
        </button>
    )
}

export default WithGoogleButton;
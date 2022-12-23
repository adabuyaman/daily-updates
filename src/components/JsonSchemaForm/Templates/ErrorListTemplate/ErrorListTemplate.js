const ErrorListTemplate = (props) => {
    const { errors } = props;
    return (
        <details>
            <summary>Errorssss</summary>
            <ul>
                {errors.map((error, i) => {
                    return (
                        <li key={i} className="error">
                            {error.stack}
                        </li>
                    );
                })}
            </ul>
        </details>
    );
}

export default ErrorListTemplate;
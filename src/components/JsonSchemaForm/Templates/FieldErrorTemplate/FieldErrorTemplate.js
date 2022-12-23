const FieldErrorTemplate = (props) => {
    const { errors } = props;
    return (
        <ul>
            {errors?.length > 0 && errors.map((error, i) => {
                return (
                    <li key={i} className="error">
                        {error}
                    </li>
                );
            })}
        </ul>
    )
}

export default FieldErrorTemplate;
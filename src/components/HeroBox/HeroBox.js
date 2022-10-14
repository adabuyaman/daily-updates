import "./HeroBox.scss";

const HeroBox = ({ title, description, actionLabel, actionOnClick }) => {
    const cssPrefix = 'heroBox';
    return (
        <div className={cssPrefix}>
            <div>
                <h1>{title}</h1>
                {description && (
                    <p>{description}</p>
                )}
                {
                    !!actionLabel && (
                        <button
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                            type="button" className={`${cssPrefix}__actionBtn btn btn-primary`} onClick={actionOnClick}>{actionLabel}</button>
                    )
                }
            </div>
        </div>
    )
}

export default HeroBox;
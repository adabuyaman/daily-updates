import "./Section.scss";

const Section = ({ children, title, actionLabel, actionOnClick }) => {
    const cssPrefix = 'section';

    return (
        <div className={cssPrefix}>
            <div className={`${cssPrefix}__header`}>
                <h2 className="title">{title}</h2>
                {actionLabel && (
                    <button type="button" onClick={actionOnClick} className={`${cssPrefix}__action-btn btn btn-outline-primary`}>{actionLabel}</button>
                )}
            </div>
            {children}
        </div>
    );
}

export default Section;
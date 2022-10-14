import './TeamActionItem.scss';

const TeamActionItem = () => {
    const cssPrefix = 'teamActionItem';
    return (
        <div className={`${cssPrefix}`}>
            <i className={`${cssPrefix}__icon las la-comments`}></i>
            <h3>Daily Updates</h3>
            <p className={`${cssPrefix}__description`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tristique justo. Proin hendrerit velit a vulputate sollicitudin. Maecenas rutrum est ac aliquam lobortis.
            </p>
        </div>
    )
}
export default TeamActionItem;
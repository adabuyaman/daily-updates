import "./AvatarGroup.scss";

const AvatarGroup = ({ children, extra }) => {
    const cssPrefix = "avatarGroup";

    return (
        <div className={cssPrefix}>
            {children}
            {
                extra &&
                <div data-bs-toggle="tooltip" title="2 more people in team" className={`${cssPrefix}__extraCount`} >+{extra}</div>
            }
        </div>
    )
}

export default AvatarGroup;
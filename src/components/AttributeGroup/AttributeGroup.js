import "./AttributeGroup.scss";

const AttributeGroup = ({ children }) => {
    const cssPrefix = "attributeGroup";

    return (
        <div className={cssPrefix}>
            {children}
        </div>
    )
}

export default AttributeGroup;
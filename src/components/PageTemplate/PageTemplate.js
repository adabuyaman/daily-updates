import "./PageTemplate.scss";

const PageTemplate = (props) => {
    const { children } = props;
    const cssPrefix = 'pageTemplate';
    console.log('children', children);
    return (
        <div className={`${cssPrefix}`}>
            <div className={`${cssPrefix}__splitBg`}></div>
            <div className="container pb-5">
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;
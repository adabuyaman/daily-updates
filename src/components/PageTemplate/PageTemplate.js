import "./PageTemplate.scss";

const PageTemplate = (props) => {
    const { children } = props;
    const cssPrefix = 'pageTemplate';
    return (
        <main className={`${cssPrefix} container py-5`}>
            {children}
        </main>
    )
}

export default PageTemplate;
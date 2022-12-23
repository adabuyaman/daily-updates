import "./PageTemplateBody.scss";

const PageTemplateBody = ({ children }) => {
    const cssPrefix = 'pageTemplateBody';

    return (
        <main className={`${cssPrefix}`}>
            {children}
        </main>
    )
}

export default PageTemplateBody;
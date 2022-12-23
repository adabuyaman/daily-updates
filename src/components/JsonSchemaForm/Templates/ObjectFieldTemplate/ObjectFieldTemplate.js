export default function ObjectFieldTemplate(props) {
    return (
        <>
            {props.properties.map(element => element.content)}
        </>
    );
}
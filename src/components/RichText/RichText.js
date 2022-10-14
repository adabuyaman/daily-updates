import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";




const RichText = () => {
    const [value, setValue] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Hello World!</p>',
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            setValue(html.replace(/rex-[0-9]+/i, (match) => {
                return `<a href='https://jira.wiley.com/browse/${match.toUpperCase()}'>${match}</a>`;
            }));
            // send the content to an API here
        },
        onBlur: ({ editor }) => {
            const html = editor.getHTML();
            setValue(html.replace(/rex-[0-9]+/i, (match) => {
                return `<a href='https://jira.wiley.com/browse/${match.toUpperCase()}'>${match}</a>`;
            }));
            // send the content to an API here
        },
    })

    useEffect(() => {

        console.log(value);
    }, [value])

    const handleOnChange = (e) => {
        console.log(e);
    }

    return (
        <EditorContent className="form-control" onc={handleOnChange} editor={editor} />
    )
}

export default RichText;
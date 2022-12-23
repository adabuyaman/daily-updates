import React from "react";
import { Button } from "react-bootstrap";

export default function ArrayFieldItemTemplate(props) {
    const {
        children,
        className,
        disabled,
        hasToolbar,
        hasRemove,
        index,
        onDropIndexClick,
        readonly,
        registry,
        uiSchema,
    } = props;
    const { MoveDownButton, MoveUpButton, RemoveButton } =
        registry.templates.ButtonTemplates;
    return (
        <div className={className}>
            <div className={hasToolbar ? "col-xs-9" : "col-xs-12"}>
                {children}
            </div>
            {hasRemove && (
                <Button variant="danger" disabled={disabled || readonly}
                    onClick={onDropIndexClick(index)}
                    uiSchema={uiSchema}>Remove</Button>
            )}
        </div>
    );
}
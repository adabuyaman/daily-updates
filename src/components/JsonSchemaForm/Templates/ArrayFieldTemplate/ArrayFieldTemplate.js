import React from "react";
import {
    getTemplate,
    getUiOptions,
    ArrayFieldTemplateProps,
    ArrayFieldTemplateItemType,
    RJSFSchema,
    StrictRJSFSchema,
} from "@rjsf/utils";
import { Button } from "react-bootstrap";


export default function ArrayFieldTemplate(props) {
    const {
        canAdd,
        className,
        disabled,
        idSchema,
        uiSchema,
        items,
        onAddClick,
        readonly,
        registry,
        required,
        schema,
        title,
    } = props;

    const uiOptions = getUiOptions(uiSchema);

    const ArrayFieldItemTemplate = getTemplate(
        "ArrayFieldItemTemplate",
        registry,
        uiOptions
    );

    return (
        <div className="row gx-5">
            <div className="col-md-4">
                <h3>{title}</h3>
                <p>{uiOptions.description || schema.description}</p>
            </div>
            <fieldset className={`${className} col-md-8`} id={idSchema.$id}>
                <div className="array-item-list">
                    {items &&
                        items.map(
                            ({ key, ...itemProps }) => (
                                <ArrayFieldItemTemplate key={key} {...itemProps} />
                            )
                        )
                    }
                </div>
                {canAdd && (
                    <Button
                        onClick={onAddClick}
                        disabled={disabled || readonly}
                    >
                        Add
                    </Button>
                )}
            </fieldset>
        </div>

    );
}
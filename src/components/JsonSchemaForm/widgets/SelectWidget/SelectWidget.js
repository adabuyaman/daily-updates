import React, { useCallback } from "react";
import {
    processSelectValue,
} from "@rjsf/utils";

function getValue(
    event,
    multiple
) {
    if (multiple) {
        return Array.from((event.target).options)
            .slice()
            .filter((o) => o.selected)
            .map((o) => o.value);
    }
    return (event.target).value;
}

function SelectWidget({
    schema,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple = false,
    autofocus = false,
    onChange,
    onBlur,
    onFocus,
    placeholder,
}) {
    const { enumOptions, enumDisabled } = options;
    const emptyValue = multiple ? [] : "";

    const handleFocus = useCallback(
        (event) => {
            const newValue = getValue(event, multiple);
            return onFocus(id, processSelectValue(schema, newValue, options));
        },
        [onFocus, id, schema, multiple, options]
    );

    const handleBlur = useCallback(
        (event) => {
            const newValue = getValue(event, multiple);
            return onBlur(id, processSelectValue(schema, newValue, options));
        },
        [onBlur, id, schema, multiple, options]
    );

    const handleChange = useCallback(
        (event) => {
            const newValue = getValue(event, multiple);
            return onChange(processSelectValue(schema, newValue, options));
        },
        [onChange, schema, multiple, options]
    );

    return (
        <select
            id={id}
            name={id}
            multiple={multiple}
            className="form-select col-2"
            value={typeof value === "undefined" ? emptyValue : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
        >
            {!multiple && schema.default === undefined && (
                <option value="">{placeholder}</option>
            )}
            {Array.isArray(enumOptions) &&
                enumOptions.map(({ value, label }, i) => {
                    const disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
                    return (
                        <option key={i} value={value} disabled={disabled}>
                            {label}
                        </option>
                    );
                })}
        </select>
    );
}

export default SelectWidget;
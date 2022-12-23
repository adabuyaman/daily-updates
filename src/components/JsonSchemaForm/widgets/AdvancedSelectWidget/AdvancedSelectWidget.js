import React, { useCallback } from "react";
import { processSelectValue } from "@rjsf/utils";
import Select from "react-select";

function getValue(event, multiple) {
    if (multiple) {
        return Array.from((event.target).options)
            .slice()
            .filter((o) => o.selected)
            .map((o) => o.value);
    }
    return (event.target).value;
}

function handleValue(v, multiple) {
    if (multiple) {
        return v.map(item => item.value);
    }
    return v.value;
}

function AdvancedSelectWidget({
    schema,
    id,
    options,
    disabled,
    readonly,
    multiple = false,
    autofocus = false,
    onChange,
    placeholder,
}) {
    const { enumOptions } = options;

    const handleChange = useCallback(
        (v) => {
            const newValue = handleValue(v, multiple);
            return onChange(processSelectValue(schema, newValue, options));
        },
        [onChange, schema, multiple, options]
    );

    return (
        <Select
            id={id}
            name={id}
            autoFocus={autofocus}
            onChange={handleChange}
            options={enumOptions}
            isDisabled={disabled || readonly}
            isMulti={multiple}
            placeholder={placeholder}
        />
    );
}

export default AdvancedSelectWidget;
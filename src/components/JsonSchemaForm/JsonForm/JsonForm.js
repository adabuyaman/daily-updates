import validator from "@rjsf/validator-ajv6";
import JsonSchemaForm from '@rjsf/core';
import ErrorListTemplate from "../Templates/ErrorListTemplate/ErrorListTemplate";
import FieldErrorTemplate from "../Templates/FieldErrorTemplate/FieldErrorTemplate";
import SelectWidget from "../widgets/SelectWidget/SelectWidget";
import FieldTemplate from "../Templates/FieldTemplate/FieldTemplate";
import ObjectFieldTemplate from "../Templates/ObjectFieldTemplate/ObjectFieldTemplate";

const JsonForm = ({ id, onSubmit, schema, uiSchema, liveValidate, showErrorList }) => {
    return (
        <JsonSchemaForm
            id={id}
            onSubmit={onSubmit}
            schema={schema}
            uiSchema={uiSchema}
            liveValidate={liveValidate}
            showErrorList={showErrorList}
            validator={validator}
            widgets={{
                SelectWidget
            }}
            templates={{
                ErrorListTemplate: ErrorListTemplate,
                FieldErrorTemplate: FieldErrorTemplate,
                FieldTemplate,
                ObjectFieldTemplate
            }}
        >
            <></>
        </JsonSchemaForm>
    )
}

JsonForm.defaultProps = {
    liveValidate: false,
    showErrorList: false,
}

export default JsonForm;
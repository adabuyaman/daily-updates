import Modal from "../Modal/Modal";
import Select from 'react-select'
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import JsonForm from "../JsonSchemaForm/JsonForm/JsonForm";
import AdvancedSelectWidget from "../JsonSchemaForm/widgets/AdvancedSelectWidget/AdvancedSelectWidget";

const CreateTeamDialog = ({ usersList, onCreate, createTeamStatus, show, handleClose }) => {
console.log(usersList);
    const schema = {
        type: "object",
        required: ["name", "members"],
        properties: {
            name: { type: "string", title: "Team name", placeholder: "e.g. Axe" },
            members: {
                title: 'Team Members',
                type: 'array',
                uniqueItems: true,
                items: {
                    type: 'string',
                    oneOf: usersList
                }
            }
        }
    };

    const uiSchema = {
        name: {
            'ui:options': {
                placeholder: 'e.g. Axe',
            },
        },
        members: {
            'ui:widget': AdvancedSelectWidget
        }
    }

    const cssPrefix = 'createTeamDialog';
    const [user] = useAuthState(auth);

    const handleOnCreate = (e) => {
        const { formData: { name, members } } = e;
        onCreate({ name, members, ownerId: user.uid });
        handleClose();
    }

    const CREATE_TEAM_DIALOG_FORM = 'CREATE_TEAM_DIALOG_FORM';

    return (
        <Modal
            title="Create team"
            show={show}
            handleClose={handleClose}
            footer={
                <>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" form={CREATE_TEAM_DIALOG_FORM} className="btn btn-primary" disabled={createTeamStatus.loading} >Create</button>
                </>
            }>
            <JsonForm
                id={CREATE_TEAM_DIALOG_FORM}
                schema={schema}
                uiSchema={uiSchema}
                onSubmit={handleOnCreate}
            />
        </Modal>
    )
}

export default CreateTeamDialog;
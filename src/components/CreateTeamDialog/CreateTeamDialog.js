import Modal from "../Modal/Modal";
import Select from 'react-select'
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const CreateTeamDialog = ({ usersList, onCreate }) => {
    const cssPrefix = 'createTeamDialog';
    const [user] = useAuthState(auth);


    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState('');

    const handleNameChange = (e) => {
        setTeamName(e.target.value);
    }

    const handleMembersChange = (e) => {
        setTeamMembers(e);
    }

    const handleOnCreate = () => {
        onCreate({ teamName, teamMembers, ownerId: user.uid });
    }

    return (
        <Modal
            title="Create team"
            footer={
                <>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleOnCreate}>Create</button>
                </>
            }>
            <form onSubmitCapture={onCreate} id={cssPrefix}>
                <div className="mb-3">
                    <label htmlFor={`${cssPrefix}__teamNameInput`} className="form-label">Team name</label>
                    <input onChange={handleNameChange} value={teamName} type="text" className="form-control" id={`${cssPrefix}__teamNameInput`} placeholder="e.g. Axe Team" required />
                </div>
                <div>
                    <label htmlFor={`${cssPrefix}__teamNameInput`} className="form-label">Team members</label>
                    <Select
                        value={teamMembers}
                        onChange={handleMembersChange}
                        options={usersList}
                        isMulti
                    />
                </div>
            </form>
        </Modal>
    )
}

export default CreateTeamDialog;
import { useEffect, useState } from "react";
import OffCanvas from "../../components/OffCanvas/OffCanvas";
import { db } from "../../config/firebase";
import { doc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import UpdatesEditor from "../../components/UpdatesEditor/UpdatesEditor";
import JsonForm from "../../components/JsonSchemaForm/JsonForm/JsonForm";
import ArrayFieldTemplate from "../../components/JsonSchemaForm/Templates/ArrayFieldTemplate/ArrayFieldTemplate";
import ArrayFieldItemTemplate from "../../components/JsonSchemaForm/Templates/ArrayFieldItemTemplate/ArrayFieldItemTemplate";
import { getUsersList } from "../../store/users/users.selectors";
import { loadUsersListAC } from "../../store/users/users.actions";
import { connect } from 'react-redux';
const TeamPageContainer = ({ teamId, users, loadUsers }) => {
    const cssPrefix = 'teamPageContainer';

    console.log(users);
    const handleCreateUpdate = async (updateObj) => {
        const docData = {
            updates: arrayUnion(updateObj),
        };
        await updateDoc(doc(db, "teams", teamId), docData);
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const schema = {
        type: "object",
        properties: {
            // regrets list
            regrets: {
                type: "array",
                title: "Regrets",
                items: {
                    type: "object",
                    required: ["member", "reason"],
                    properties: {
                        member: {
                            "type": "string",
                            "title": "Member",
                            oneOf: [
                                { const: "canada", title: "ahmad" },
                                { const: "canada", title: "ahmad" },
                                { const: "canada", title: "ahmad" },
                            ],
                        },
                        reason: {
                            "type": "string",
                            "title": "Reason",

                            oneOf: [
                                { title: 'Vacation', const: 'vacation' },
                                { title: 'Sick leave', const: 'sick-leave' },
                            ]
                        }
                    }
                }
            },
            updates: {
                type: "array",
                title: "Updates",
                items: {
                    type: "object",
                    required: ["member", "reason"],
                    properties: {
                        member: {
                            "type": "string",
                            "title": "Member",
                            oneOf: [
                                { const: "canada", title: "ahmad" },
                                { const: "canada", title: "ahmad" },
                                { const: "canada", title: "ahmad" },
                            ],
                        },
                        yesterday_update: {
                            "type": "string",
                            "title": "What I have done yesterday?",
                        },
                        today_update: {
                            "type": "string",
                            "title": "What I will be working on today?",
                        },
                    }
                }
            },
        }
    };


    const uiSchema = {
        regrets: {
            'ui:ArrayFieldTemplate': ArrayFieldTemplate,
            'ui:ArrayFieldItemTemplate': ArrayFieldItemTemplate,
            'ui:options': {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            items: {
                classNames: 'row',

                member: {
                    classNames: 'col-6',
                    title: null,
                },
                reason: {
                    classNames: 'col-6',

                }
            }
        },
        updates: {
            'ui:ArrayFieldTemplate': ArrayFieldTemplate,
            'ui:ArrayFieldItemTemplate': ArrayFieldItemTemplate,
            'ui:options': {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra quam nec tortor egestas'
            },
            items: {
                yesterday_update: {
                    "ui:widget": "textarea",
                },
                today_update: {
                    "ui:widget": "textarea",
                }
            }
        },
    }

    return (
        <div>
            <JsonForm
                uiSchema={uiSchema}
                schema={schema}
            />
            {/* <div className="d-flex gap-3">
                <ul className="nav nav-tabs" style={{ flex: 1 }} id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Tuesday, 12th</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <button className="btn btn-primary ms-auto" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Create updates sheet</button>
            </div>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <UpdatesEditor />
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    ..
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                    ..
                </div>
                <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                    ..
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleCreateUpdate}>test</button> */}
        </div>
    );
}

export default connect((state) => ({
    users: getUsersList(state),
}), {
    loadUsers: loadUsersListAC.triggerAC,
})(TeamPageContainer);
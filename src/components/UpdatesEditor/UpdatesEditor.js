import { useEffect, useState } from "react";
import { users } from "../../data";
import { updatesObjInitial } from "../../dictionaries/initialValue/updatesObj";
import MemberUpdateItem from "../MemberUpdateItem/MemberUpdateItem";
import RegretItem from "../RegretItem/RegretItem";
import Section from "../Section/Section";

const UpdatesEditor = () => {
    const cssPrefix = 'updatesEditor';
    const [regretsList, setRegretsList] = useState([]);
    const [updatesObj, setUpdatesObj] = useState(updatesObjInitial);

    useEffect(() => {
        setRegretsList();
    }, [])

    const handleAddRegret = () => {
        const copy = [...regretsList];
        const newRegret = {
            name: 'Ahmad Abuyaman',
            reason: '🏖️ Sick leave'
        };
        copy.push(newRegret);
        setRegretsList(copy);
    }

    const handleRemoveRegret = (index) => {
        const copy = [...regretsList];
        copy.splice(index, 1);
        setRegretsList(copy);
    }

    const onChange = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Section
                title="Regrets"
                actionLabel="Add regret"
                actionOnClick={handleAddRegret}
            >
                <div className={cssPrefix}>
                    {regretsList?.length ?
                        regretsList.map(({ name, reason }, index) => (
                            <RegretItem
                                names={users}
                                selectedName={name}
                                selectedReason={reason}
                                key={index.toString()}
                                index={index}
                                onRemoveClick={handleRemoveRegret}
                            />
                        ))
                        :
                        <p className="text-center text-muted">No regrets were added</p>
                    }
                </div>
            </Section>
            <Section
                title="Members Updates"
            >
                <div className={cssPrefix}>
                    <div className="accordion" id="accordionExample">
                        {users.map(user => (
                            <MemberUpdateItem key={user.id} user={user} onChange={onChange} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default UpdatesEditor;
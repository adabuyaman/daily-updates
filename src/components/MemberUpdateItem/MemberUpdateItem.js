import { useCallback, useEffect, useState } from "react";
import RichText from "../RichText/RichText";
import "./MemberUpdateItem.scss";

const MemberUpdateItem = ({ user, onChange, readonly }) => {
    const cssPrefix = 'memberUpdateItem';
    const [currentWork, setCurrentWork] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a euismod turpis. Integer quis congue metus, vitae auctor quam. Cras mattis condimentum ligula et interdum. Suspendisse consequat ut lorem id tempor. Quisque id sodales ex, vel facilisis lacus. Sed turpis elit, pellentesque at maximus nec, vulputate nec nisl. Suspendisse potenti. Vestibulum ullamcorper iaculis nisi sit amet ornare. In hendrerit leo non dapibus tincidunt.");
    const [tomorrowWork, setTomorrowWork] = useState("test");
    const [blockers, setBlockers] = useState("test");

    const handleWorkChange = (e) => {
        const text = e.target.value;
        const updated = text.replace(/rex-[0-9]+/i, (match) => {
            return `<a href='https://jira.wiley.com/browse/${match.toUpperCase()}'>${match}</a>`;
        })
        setCurrentWork(text);
    }

    const handleTomorrowChange = (e) => {
        const text = e.target.value;

        setTomorrowWork(text);
    }

    const handleBlockersChange = (e) => {
        const text = e.target.value;

        setBlockers(text);
    }
    const handleMemberUpdate = useCallback(() => {
        onChange({
            user,
            current_work: currentWork,
            tomorrow_work: tomorrowWork,
            blockers
        });
    }, [currentWork, tomorrowWork, blockers, user, onChange]);

    useEffect(() => {
        handleMemberUpdate()
    }, [handleMemberUpdate, currentWork, tomorrowWork, blockers])

    if (readonly)
        return (
            <div className={`${cssPrefix} accordion-item`}>
                <h2 className="accordion-header" >
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#id-${user.id}-collapse`} aria-expanded="true" aria-controls={`id-${user.id}-collapse`}>
                        {user?.name}
                    </button>
                </h2>
                <div id={`id-${user.id}-collapse`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h5 className="form-label">Currently working on</h5>
                        <p onChange={handleWorkChange}>{currentWork}</p>
                        <h5 className="form-label">Tomorrow will be working on</h5>
                        <p onChange={handleTomorrowChange}>{tomorrowWork}</p>
                        <h5 className="form-label">Blockers</h5>
                        <p onChange={handleBlockersChange}>{blockers}</p>
                    </div>
                </div>
            </div>
        )

    return (
        <div className={`${cssPrefix} accordion-item`}>
            <h2 className="accordion-header" >
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#id-${user.id}-collapse`} aria-expanded="true" aria-controls={`id-${user.id}-collapse`}>
                    {user?.name}
                </button>
            </h2>
            <div id={`id-${user.id}-collapse`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <label className="form-label">Currently working on</label>
                    <textarea onChange={handleWorkChange} className="form-control" value={currentWork} />
                    <label className="form-label">Tomorrow will be working on</label>
                    <textarea onChange={handleTomorrowChange} className="form-control" value={tomorrowWork} />
                    <label className="form-label">Blockers</label>
                    <textarea onChange={handleBlockersChange} className="form-control" value={blockers} />
                </div>
            </div>
        </div>
    );
}

export default MemberUpdateItem;
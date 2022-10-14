import "./RegretItem.scss";

const RegretItem = ({ names, selectedUserId, selectedReason, index, onRemoveClick }) => {
    const cssPrefix = 'regretItem';

    const reasonOptions = [
        '🤒 Sick leave',
        '🏖️ Vacation',
        '❓ Other'
    ];

    const handleOnRemove = () => {
        onRemoveClick(selectedUserId);
    }

    return (
        <div className={cssPrefix}>
            <select className="form-select" >
                {names.map(user => (
                    <option value={user.name} selected={user.name === selectedUserId}>{user.name}</option>
                ))}
            </select>
            <select className="form-select" >
                {reasonOptions.map(item => (
                    <option value={item} selected={item === selectedReason}>{item}</option>
                ))}
            </select>
            <button onClick={handleOnRemove} type="button" className="btn btn-outline-danger">
                <i className="las la-minus-circle"></i>
            </button>
        </div>
    );
}

export default RegretItem;
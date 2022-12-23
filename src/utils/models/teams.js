import { format } from 'date-fns';
import { Timestamp } from 'firebase/firestore';
export const teamsArrayToObject = (teamsProxy) => {
    const teamsArr = JSON.parse(JSON.stringify(teamsProxy))
    return teamsArr.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue }), {});
}

export const teamsObjectToArray = (teamsObj) => {
    return Object.values(teamsObj);
}

export const teamSerializer = {
    fromFirebase(obj) {
        const data = obj.data();
        const { createdAt } = data;
        return {
            ...data,
            id: obj.id,
            createdAt: createdAt ? format(createdAt.toDate(), 'd/M/y') : '',
            membersLoading: true,
        };
    },
    toFirebase({ name, members, owner }) {
        return {
            name,
            members,
            createdAt: Timestamp.fromDate(new Date()),
            owner
        };
    }
};
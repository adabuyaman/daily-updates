export const teamsArrayToObject = (teamsProxy) => {
    const teamsArr = JSON.parse(JSON.stringify(teamsProxy))
    return teamsArr.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue }), {});
}

export const teamsObjectToArray = (teamsObj) =>{
    return Object.values(teamsObj);
}
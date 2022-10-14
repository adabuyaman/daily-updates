
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CreateTeamDialog from "../../components/CreateTeamDialog/CreateTeamDialog";
import Modal from "../../components/Modal/Modal";
import TeamItem from "../../components/TeamItem/TeamItem";
import { auth, db } from "../../config/firebase";
import { getUsers } from "../../models/member";
import { loadUsersListAC } from "../../store/users/users.actions";
import { connect } from 'react-redux';
import { getUsersListAsOptions } from "../../store/users/users.selectors";
import HeroBox from "../../components/HeroBox/HeroBox";
import { createTeamAC, loadMyTeamsAC } from "../../store/teams/teams.actions";
import { getMyTeams } from "../../store/teams/teams.selectors";


const TeamsContainer = ({
    usersListAsOptions,
    loadMyTeams,
    loadUsers,
    createTeam,
    myTeamsList,
}) => {

    const cssPrefix = 'teamsContainer';
    const [user] = useAuthState(auth);

    // const createTeam = (teamName, teamMembers) => {
    //     const teamsRef = collection(db, 'teams');
    //     const newTeamObj = {
    //         name: teamName,
    //         members: teamMembers.map(member => member.value),
    //         owner: user.uid
    //     };
    //     addDoc(teamsRef, newTeamObj);
    // }

    useEffect(() => {
        loadMyTeams(user.uid);
        loadUsers();
    }, [loadMyTeams, loadUsers, user])

    // if (loading) {
    //     return <h1>loading</h1>
    // }

    return (
        <div>
            <HeroBox
                title="My teams"
                description="Here's the place where you find all of your teams. the ones you created or invited to."
                actionLabel="Create team"
                action
            />
            <div className="row g-3">
                {myTeamsList.length > 0 ?
                    myTeamsList.map(({ id, name, status, logo, owner, members, membersLoading, createdAt }) => (
                        <div className={`${cssPrefix} col-lg-4`} key={id}>
                            <TeamItem
                                teamId={id}
                                key={id}
                                createdAt={createdAt}
                                owner={owner}
                                name={name}
                                status={status}
                                logoSrc={logo}
                                membersLoading={membersLoading}
                                members={members}
                            />
                        </div>
                    ))
                    : <span>no teams</span>
                }
                <CreateTeamDialog
                    usersList={usersListAsOptions}
                    onCreate={createTeam}
                />
            </div>
        </div>

    )
}

export default connect((state) => ({
    usersListAsOptions: getUsersListAsOptions(state),
    myTeamsList: getMyTeams(state),
}), {
    loadMyTeams: loadMyTeamsAC.triggerAC,
    loadUsers: loadUsersListAC.triggerAC,
    createTeam: createTeamAC.triggerAC,
})(TeamsContainer)


import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CreateTeamDialog from "../../components/CreateTeamDialog/CreateTeamDialog";
import TeamItem from "../../components/TeamItem/TeamItem";
import { auth } from "../../config/firebase";
import { loadUsersListAC } from "../../store/users/users.actions";
import { connect } from 'react-redux';
import { getUsersListAsEnumOptions } from "../../store/users/users.selectors";
import HeroBox from "../../components/HeroBox/HeroBox";
import { createTeamAC, loadMyTeamsAC } from "../../store/teams/teams.actions";
import { getCreateTeamStatus, getMyTeams } from "../../store/teams/teams.selectors";

const TeamsContainer = ({
    usersListAsOptions,
    createTeamStatus,
    loadMyTeams,
    loadUsers,
    createTeam,
    myTeamsList,
}) => {
    const cssPrefix = 'teamsContainer';
    const [user] = useAuthState(auth);
    const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);

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
                actionOnClick={() => setShowCreateTeamModal(true)}
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
                    show={showCreateTeamModal}
                    usersList={usersListAsOptions}
                    handleClose={() => setShowCreateTeamModal(false)}
                    onCreate={createTeam}
                    createTeamStatus={createTeamStatus}
                />
            </div>
        </div>

    )
}

export default connect((state) => ({
    usersListAsOptions: getUsersListAsEnumOptions(state),
    myTeamsList: getMyTeams(state),
    createTeamStatus: getCreateTeamStatus(state),
}), {
    loadMyTeams: loadMyTeamsAC.triggerAC,
    loadUsers: loadUsersListAC.triggerAC,
    createTeam: createTeamAC.triggerAC,
})(TeamsContainer)

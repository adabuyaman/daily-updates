import { Link } from "react-router-dom";
import Attribute from "../Attribute/Attribute";
import AttributeGroup from "../AttributeGroup/AttributeGroup";
import Avatar from "../Avatar/Avatar";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import "./TeamItem.scss";

const TeamItem = ({ name, status = "active", logoSrc, teamId, members, membersLoading, owner, createdAt }) => {
    const cssPrefix = 'teamItem';
    return (
        <div className={`${cssPrefix} border rounded`}>
            <div className={`${cssPrefix}__inner`}>

                <div className={`${cssPrefix}__leftSide `}>
                    {
                        logoSrc &&
                        <img className={`${cssPrefix}__logo`} alt="Axe team" src={logoSrc} />
                    }
                    <div>
                        <Link to={teamId}><h4 className={`${cssPrefix}__name`}>{name}</h4></Link>
                        {
                            status && status === 'active' ?
                                <span className="badge bg-success">Active</span>
                                :
                                <span className="badge bg-secondary">Inactive</span>
                        }
                    </div>
                </div>

                <div className={`${cssPrefix}__rightSide`}>
                    {members && (
                        <AvatarGroup extra={members.length - 3 > 0 ? members.length - 3 : false}>
                            {
                                members.map(member => (
                                    <Avatar key={member.uid} loading={membersLoading} name={member.name} />
                                ))
                            }
                        </AvatarGroup>
                    )}

                    <Link to={teamId}><i className={`${cssPrefix}__arrowIcon las la-long-arrow-alt-right`}></i></Link>
                </div>
            </div>

            <AttributeGroup>
                <Attribute iconClass="las la-calendar" label={createdAt}/>
                <Attribute iconClass="las la-user" />
            </AttributeGroup>
        </div>
    )
}

export default TeamItem;
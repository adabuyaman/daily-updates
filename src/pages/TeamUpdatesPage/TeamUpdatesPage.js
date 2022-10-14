import { useParams } from "react-router-dom";
import HeroBox from "../../components/HeroBox/HeroBox";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import TeamUpdatesContainer from "../../container/TeamUpdatesContainer/TeamUpdatesContainer";

const TeamUpdatesPage = () => {
    const { teamId } = useParams();
    
    return (
        <PageTemplate>
            <HeroBox title="Daily Updates Tool"
            />
            <TeamUpdatesContainer
                teamId={teamId}
            />
        </PageTemplate>
    )
}

export default TeamUpdatesPage;
import HeroBox from "../../components/HeroBox/HeroBox";
import PageTemplate from "../../components/PageTemplate/PageTemplate"
import TeamActionItem from "../../components/TeamActionItem/TeamActionItem";

const TeamsPage = () => {
    return (
        <PageTemplate>
            <div className="row">
                <div className="col-3">
                    <TeamActionItem />
                </div>
            </div>
        </PageTemplate>
    )
}

export default TeamsPage;
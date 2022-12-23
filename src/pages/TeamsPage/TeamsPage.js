import PageTemplate from "../../components/PageTemplate/PageTemplate"
import PageTemplateBody from "../../components/PageTemplateBody/PageTemplateBody";
import PageTemplateHeader from "../../components/PageTemplateHeader/PageTemplateHeader";
import TeamsContainer from "../../container/TeamsContainer.js/TeamsContainer";

const breadcrumbList = [
    {
        title: 'My Teams',
        link: '/teams',
        active: true
    },
]

const TeamsPage = () => {
    return (
        <PageTemplate>
            <PageTemplateHeader breadcrumbList={breadcrumbList}>
                test
            </PageTemplateHeader>
            <PageTemplateBody>
                <TeamsContainer />
            </PageTemplateBody>
        </PageTemplate>
    )
}

export default TeamsPage;
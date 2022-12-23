import { Tab, Tabs } from "react-bootstrap";
import JsonForm from "../../components/JsonSchemaForm/JsonForm/JsonForm";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import PageTemplateBody from "../../components/PageTemplateBody/PageTemplateBody";
import PageTemplateHeader from "../../components/PageTemplateHeader/PageTemplateHeader";
import TeamPageContainer from "../../container/TeamUpdatesContainer/TeamUpdatesContainer";
import "./TeamPage.scss";

const breadcrumbList = [
    {
        title: 'My Teams',
        link: '/teams',
        active: false
    },
    {
        title: 'Axe',
        link: '/teams/ym22fxIs1s2qJ8lGTE7I',
        active: true,
    }
];

const teamUpdatesSchema = {

};

const TeamsPage = () => {
    const cssPrefix = "teamPage";
    return (
        <PageTemplate>
            <PageTemplateHeader breadcrumbList={breadcrumbList} />
            <PageTemplateBody>
                <div className={`${cssPrefix}`}>
                    {/* <Tabs
                        defaultActiveKey="home"
                        variant="pills"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Home">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tincidunt eros. Morbi suscipit, turpis sit amet posuere commodo, lacus nisl suscipit sem, eu aliquam dui massa at risus. Nullam posuere neque id orci tempor bibendum. Sed maximus leo augue, a auctor nibh dignissim quis. Morbi et ipsum nunc. Proin ut odio in dui bibendum cursus. In sed vestibulum nibh. Proin vitae semper ligula. Nulla commodo ante sed orci auctor tincidunt. Phasellus commodo pharetra venenatis. Nulla pulvinar ipsum sodales lacus rutrum, at maximus mauris auctor. Donec et efficitur nisi, tincidunt dictum nulla. Sed posuere quam at venenatis commodo. In tincidunt neque ut libero rutrum, id maximus eros scelerisque. Maecenas eget facilisis augue. Sed quis aliquam mauris.

                                Etiam imperdiet ornare urna, ac fermentum sapien varius ac. Nunc quis purus vel tellus fringilla aliquam et et est. Vestibulum auctor libero at congue venenatis. Vivamus sit amet ante in tellus vulputate commodo egestas at libero. Suspendisse gravida, diam a eleifend iaculis, diam risus consequat ante, ut dictum turpis lacus eget odio. Quisque imperdiet lacus nunc, nec ultrices nisl sodales vitae. Sed non dolor enim. Integer hendrerit enim purus, vitae tristique nunc rhoncus sed. Suspendisse sollicitudin mi at sem consequat sagittis. Pellentesque elementum congue blandit. Suspendisse consectetur lectus ut leo sodales consequat. Vivamus vel sagittis sem. Maecenas nec orci felis. Nunc venenatis ipsum quis tellus faucibus, vel hendrerit diam scelerisque.

                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus volutpat commodo nunc eu elementum. Nulla facilisi. Curabitur libero nunc, bibendum nec nisi non, condimentum molestie mi. Duis quis varius nunc. Curabitur in ultrices nulla. In a rhoncus turpis. Duis pretium, arcu vel tempor posuere, orci ex efficitur dolor, vel iaculis lorem metus vitae nibh.


                            </p>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <p>
                                ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tincidunt eros. Morbi suscipit, turpis sit amet posuere commodo, lacus nisl suscipit sem, eu aliquam dui massa at risus. Nullam posuere neque id orci tempor bibendum. Sed maximus leo augue, a auctor nibh dignissim quis. Morbi et ipsum nunc. Proin ut odio in dui bibendum cursus. In sed vestibulum nibh. Proin vitae semper ligula. Nulla commodo ante sed orci auctor tincidunt. Phasellus commodo pharetra venenatis. Nulla pulvinar ipsum sodales lacus rutrum, at maximus mauris auctor. Donec et efficitur nisi, tincidunt dictum nulla. Sed posuere quam at venenatis commodo. In tincidunt neque ut libero rutrum, id maximus eros scelerisque. Maecenas eget facilisis augue. Sed quis aliquam mauris.

                                Etiam imperdiet ornare urna, ac fermentum sapien varius ac. Nunc quis purus vel tellus fringilla aliquam et et est. Vestibulum auctor libero at congue venenatis. Vivamus sit amet ante in tellus vulputate commodo egestas at libero. Suspendisse gravida, diam a eleifend iaculis, diam risus consequat ante, ut dictum turpis lacus eget odio. Quisque imperdiet lacus nunc, nec ultrices nisl sodales vitae. Sed non dolor enim. Integer hendrerit enim purus, vitae tristique nunc rhoncus sed. Suspendisse sollicitudin mi at sem consequat sagittis. Pellentesque elementum congue blandit. Suspendisse consectetur lectus ut leo sodales consequat. Vivamus vel sagittis sem. Maecenas nec orci felis. Nunc venenatis ipsum quis tellus faucibus, vel hendrerit diam scelerisque.

                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus volutpat commodo nunc eu elementum. Nulla facilisi. Curabitur libero nunc, bibendum nec nisi non, condimentum molestie mi. Duis quis varius nunc. Curabitur in ultrices nulla. In a rhoncus turpis. Duis pretium, arcu vel tempor posuere, orci ex efficitur dolor, vel iaculis lorem metus vitae nibh.


                            </p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tincidunt eros. Morbi suscipit, turpis sit amet posuere commodo, lacus nisl suscipit sem, eu aliquam dui massa at risus. Nullam posuere neque id orci tempor bibendum. Sed maximus leo augue, a auctor nibh dignissim quis. Morbi et ipsum nunc. Proin ut odio in dui bibendum cursus. In sed vestibulum nibh. Proin vitae semper ligula. Nulla commodo ante sed orci auctor tincidunt. Phasellus commodo pharetra venenatis. Nulla pulvinar ipsum sodales lacus rutrum, at maximus mauris auctor. Donec et efficitur nisi, tincidunt dictum nulla. Sed posuere quam at venenatis commodo. In tincidunt neque ut libero rutrum, id maximus eros scelerisque. Maecenas eget facilisis augue. Sed quis aliquam mauris.

                                Etiam imperdiet ornare urna, ac fermentum sapien varius ac. Nunc quis purus vel tellus fringilla aliquam et et est. Vestibulum auctor libero at congue venenatis. Vivamus sit amet ante in tellus vulputate commodo egestas at libero. Suspendisse gravida, diam a eleifend iaculis, diam risus consequat ante, ut dictum turpis lacus eget odio. Quisque imperdiet lacus nunc, nec ultrices nisl sodales vitae. Sed non dolor enim. Integer hendrerit enim purus, vitae tristique nunc rhoncus sed. Suspendisse sollicitudin mi at sem consequat sagittis. Pellentesque elementum congue blandit. Suspendisse consectetur lectus ut leo sodales consequat. Vivamus vel sagittis sem. Maecenas nec orci felis. Nunc venenatis ipsum quis tellus faucibus, vel hendrerit diam scelerisque.

                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus volutpat commodo nunc eu elementum. Nulla facilisi. Curabitur libero nunc, bibendum nec nisi non, condimentum molestie mi. Duis quis varius nunc. Curabitur in ultrices nulla. In a rhoncus turpis. Duis pretium, arcu vel tempor posuere, orci ex efficitur dolor, vel iaculis lorem metus vitae nibh.


                            </p>
                        </Tab>
                    </Tabs> */}
                    <TeamPageContainer />
                    <JsonForm
                        schema={teamUpdatesSchema}
                    />
                </div>
            </PageTemplateBody>
        </PageTemplate>
    )
}

export default TeamsPage;
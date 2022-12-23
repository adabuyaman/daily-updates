import { Breadcrumb } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PageTemplateHeader.scss";

const PageTemplateHeader = ({ breadcrumbList }) => {
    const cssPrefix = 'pageTemplateHeader';

    return (
        <div className={cssPrefix}>
            {
                breadcrumbList.length > 0 && (
                    <Breadcrumb>
                        {
                            breadcrumbList.map((item) => (
                                <Breadcrumb.Item active={item.active}>
                                    <Link to={item.link}>{item.title}</Link>
                                </Breadcrumb.Item>
                            ))
                        }
                    </Breadcrumb>
                )
            }
            <div className={`${cssPrefix}__header`}>
                <div className={`${cssPrefix}__header__teamInfo`}>
                    <h3 className={`${cssPrefix}__teamName`}>Axe</h3>
                    <p className={`${cssPrefix}__teamCode`}>ym22fxIs1s2qJ8lGTE7I</p>
                </div>
            </div>
        </div>
    )
}

PageTemplateHeader.propTypes = {
    breadcrumbList: PropTypes.array
}

PageTemplateHeader.defaultProps = {
    breadcrumbList: []
}

export default PageTemplateHeader;
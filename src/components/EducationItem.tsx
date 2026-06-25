import {Education} from "../data/education";

const EducationItem = ({degree, school, detailLabel, detail}: Education) => {
    return (
        <li className="projects-list">
            <div>
                <strong>{degree}</strong> - {school} <br/>
                <em>{detailLabel}: </em>{detail}
            </div>
        </li>
    );
};

export default EducationItem;

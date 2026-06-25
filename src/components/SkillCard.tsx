import {Skill} from "../data/skills";

const SkillCard = ({name, icon, items}: Skill) => {
    return (
        <div className="skill">
            <img src={icon} alt={name}/>
            <h3>{name}</h3>
            <p>{items.join(", ")}</p>
        </div>
    );
};

export default SkillCard;

export interface Skill {
    name: string;
    icon: string;
    items: string[];
}

export const skills: Skill[] = [
    {
        name: "Programming",
        icon: "/assets/code.svg",
        items: ["C/C++", "Python", "ABAP", "HTML/CSS", "JavaScript"],
    },
    {
        name: "Database",
        icon: "/assets/database.svg",
        items: ["MySQL", "SAP HANA"],
    },
    {
        name: "Cloud Computing",
        icon: "/assets/clouds.svg",
        items: ["Google Cloud", "AWS", "Embedded Systems"],
    },
    {
        name: "Testing",
        icon: "/assets/check.svg",
        items: ["HIL Testing", "Unit Testing"],
    },
];

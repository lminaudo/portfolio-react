export interface Education {
    degree: string;
    school: string;
    detailLabel: string;
    detail: string;
}

export const education: Education[] = [
    {
        degree: "Master of Business Administration",
        school: "Louisiana State University - Shreveport",
        detailLabel: "Specialization",
        detail: "Project Management",
    },
    {
        degree: "M.S. Computer Science and Information Systems",
        school: "University of Michigan - Flint",
        detailLabel: "Concentration",
        detail: "Computer Science",
    },
    {
        degree: "B.S. Computer Science",
        school: "University of Michigan - Flint",
        detailLabel: "Minor",
        detail: "General Business",
    },
];

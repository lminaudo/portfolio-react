export interface Project {
    title: string;
    description: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: "Software Engineer - Electric Power Conversion Control",
        description:
            "Unified software streams, enhanced EV/PHEV algorithms, and resolved software dependencies, ensuring compliance with industry standards. Conducted HIL testing and developed robust unit test cases.",
        technologies: ["C/C++", "HIL Bench"],
    },
    {
        title: "Software Engineer - SAP ABAP",
        description:
            "Streamlined tax calculations and enhanced the VELO module with custom tax reports and global accounting interfaces, improving documentation and reporting.",
        technologies: ["SQL", "ABAP"],
    },
    {
        title: "Lead Software Capstone Project - Human Exploration Rover Challenge Dashboard",
        description:
            "Developed a real-time data visualization platform for NASA's Rover Challenge, leveraging AWS, Raspberry Pi, and Python to monitor competition metrics live.",
        technologies: ["AWS", "Raspberry Pi", "Python", "JavaScript", "HTML/CSS"],
    },
    {
        title: "My Portfolio Site",
        description:
            "This site is built using React, CSS, and HTML. It's hosted on a Proxmox server running on-premises with Node.js and npm for managing dependencies and building the application. It showcases my work in web development and software engineering.",
        technologies: ["React", "CSS", "HTML", "Node.js", "npm", "Proxmox (on-prem server)"],
    },
];

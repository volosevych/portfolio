import project1 from '../../assets/project-img/project-1.png';
import project2 from '../../assets/project-img/project-2.png';
import project3 from '../../assets/project-img/project-3.png';
import project4 from '../../assets/project-img/project-4.png';

export const projects = [
    {
        image: project1,
        suptitle: 'Featured Project',
        name: 'Responsive Website',
        description: 'I made this app using Bootstrap, CSS Animation, JavaScript. This website is fully responsive for phone devices also, I did the dark and light themes, so your eyes will be safe at night :)',
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'CSS Animation'],
        link: ["https://github.com/volosevych/Bootstrap-Landing-Page?tab=readme-ov-file", "https://volosevych.github.io/Bootstrap-Landing-Page/"],
    },
    {
        image: project2, 
        suptitle: "Featured Project",
        name: "SAAS Landing Page",
        description: "A simple multipage website created using HTML and CSS, where I have been developing more complex CSS animations.",
        tags: ["React", "Tailwind CSS", "Vue.js", "CSS Animations"],
        link: ["https://github.com/volosevych/saas-landing-page", "https://volosevych.github.io/saas-landing-page/"],
    },
    {
        image: project3, 
        suptitle: "Featured Project",
        name: "Business Website",
        description: "This website was one of my first projects. I included it here to showcase my progress. It is a simple website using only plain CSS and HTML, with some CSS animations.",
        tags: ["CSS", "HTML", "JavaScript"],
        link: ["https://github.com/volosevych/Website-Layout-?tab=readme-ov-file", "https://volosevych.github.io/Website-Layout-/"],
    },

    {
        image: project4,
        suptitle: 'Featured Project',
        name: 'Positivus',
        description: 'I developed this website based on a free Figma design to enhance and showcase my skills.',
        tags: ['React, Animations, Tailwind CSS'],
        link: ['https://github.com/volosevych/positivus', 'https://volosevych.github.io/positivus/']
    }
]

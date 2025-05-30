export interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  period: string;
  description: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "BeFollowed",
    role: "Front-End Developer",
    location: "Ottawa, Canada",
    period: "Mar 2024 – Mar 2025",
    description: [
      "Improved performance and reliability of existing web platforms by resolving bugs and optimizing rendering logic.",
      "Developed and integrated new React components, enhancing user experience and functionality across key features.",
      "Customized Drupal modules to meet evolving business needs and improve CMS flexibility.",
      "Ensured responsive design and full cross-browser compatibility for consistent experience across devices.",
      "Collaborated with stakeholders to clarify requirements, propose solutions, and deliver high-quality, scalable features.",
    ],
    stack: [
      "React",
      "NextJS",
      "TypeScript",
      "Drupal",
      "Javascript",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "Ross Video",
    role: "Front-End Developer",
    location: "Ottawa, Canada",
    period: "Aug 2022 – Aug 2023",
    description: [
      "Built and maintained scalable, reusable React components to support a dynamic product ecosystem, improving development efficiency and maintainability.",
      "Developed complex UI functionality using React, TypeScript, and Styled Components, delivering performant and responsive interfaces.",
      "Implemented robust unit and integration tests using Jest and React Testing Library, increasing code coverage and reducing regression bugs.",
      "Led end-to-end testing initiatives using Playwright to ensure production-grade stability and user confidence.",
      "Ensured cross-browser compatibility and seamless functionality across major browsers and devices.",
      "Used React Aria to build an accessible, keyboard-navigable component for enhanced UX compliance.",
      "Integrated FabricJS to support a stakeholder request for a visual 3D map editor used in robotic camera planning workflows.",
      "Collaborated in Agile sprints to refine stories, groom tickets, and prioritize backlog based on product goals.",
      "Used GitLab to manage version control, conduct code reviews, and maintain clean development pipelines.",
      "Supported developers by offering guidance, reviewing code, and assisting with debugging.",
      "Worked closely with product owners, designers, and QA to deliver features aligned with business requirements and timelines.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Gitlab",
      "ReactAria",
      "Jest",
      "RTL",
      "Playwright",
      "StyledComponents",
      "FabricJS",
    ],
  },
  {
    company: "Airmeez",
    role: "Front-End Developer",
    location: "Florida, US",
    period: "Nov 2019 – Dec 2022",
    description: [
      "Led the redesign and front-end development of a responsive web dashboard, improving usability across desktop and mobile devices.",
      "Built an interactive drag-and-drop IVR flowchart editor using JavaScript and jQueryUI, allowing users to connect actions, zoom, export flows as JSON, and simulate call paths.",
      "Integrated dynamic form components, including location selectors with Google Maps API, enhancing user interaction and data accuracy.",
      "Developed core data-handling logic and collaborated on database schema design to support front-end needs.",
      "Created and managed a Parse-based database to demo and test frontend features during the development lifecycle.",
      "Delivered cross-browser compatible UI and ensured full support for legacy browsers including Internet Explorer.",
      "Contributed as principal UI/UX designer for the platform, establishing consistency and user-centric flows.",
      "Participated in sprint planning, issue tracking, and documentation using Jira.",
      "Worked closely with stakeholders to gather feedback and translate requirements into high-quality implementations.",
    ],
    stack: [
      "Javascript",
      "JQuery",
      "JQueryUI",
      "HTML",
      "CSS",
      "GoogleMaps",
      "APIs",
      "Parse",
      "Jira",
    ],
  },
  {
    company: "QuickTo Solutions",
    role: "Full-Stack Developer",
    location: "Ottawa, Canada",
    period: "Dec 2019 – Dec 2020",
    description: [
      "Designed and developed the mobile app interface using Flutter, ensuring a responsive and visually appealing experience on Android and iOS.",
      "Built and maintained the clinic dashboard UI using ReactJS, integrating real-time data and user-friendly workflows.",
      "Directed UX and visual design for both mobile and web platforms using Adobe Photoshop and Illustrator, aligning design with accessibility and branding goals.",
      "Contributed to backend development using ExpressJS and MongoDB, including building APIs and database models to support front-end functionality.",
      "Collaborated with cross-functional teams to ensure seamless communication between design, front-end, and back-end.",
      "Helped define and refine product features based on stakeholder feedback and testing cycles.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "React",
      "Javascript",
      "HTML",
      "CSS",
      "ExpressJS",
      "MongoDB",
      "Photoshop",
      "Illustrator",
    ],
  },

  {
    company: "Giant Tiger",
    role: "Front-End Developer",
    period: "2019 – 2020",
    description: [
      "Developed and styled career portal web pages using HTML5, CSS, and JavaScript, ensuring accessibility and mobile responsiveness.",
      "Created interactive UI elements using jQuery, Bootstrap, and Slick, enhancing user engagement and navigation.",
      "Utilized a content management system (CMS) to manage and update dynamic content efficiently across the career portal.",
      "Collaborated with the design and development teams in planning sessions to deliver components aligned with branding and functionality goals.",
      "Employed Git for version control and integration with team workflows.",
    ],
    stack: ["HTML", "CSS", "Javascript", "Bootstrap", "JQuery", "Git"],
  },
];

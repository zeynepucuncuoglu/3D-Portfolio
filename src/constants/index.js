import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    java,
    swift,
    microsoft,
    netcad,
    wtfiPoster,
    linkedin,
    discord,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "iOS  Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "swift",
      icon: swift,
    },
  ];

  const socials = [
    {
      site: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/zeynepucuncuoglu/",
    },
    {
      site: "GitHub",
      icon: github,
      url: "https://github.com/zeynepucuncuoglu",
    },
    {
      site: "Discord",
      icon: discord,
      url: "https://discord.com/users/692078958845493349",
    },
  ]; 

  const educations = [
    {
      school_name: "Bilkent University",
      department: "Bachelors of Science in Information Systems and Technologies",
      date: "2017-2023",
    },
    {
      school_name: "Patika.dev",
      department: "Getir iOS Bootcamp",
      date: "Mar 2024 - Apr 2024"
    }
   
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Netcad Yazılım A.Ş",
      icon: netcad,
      iconBg: "#383E56",
      date: "Aug 2021 - Sept 2021",
      points: [
        "Developing a user-friendly autonomous system in order to schedule basic operations for machines while using JS, Html, Bootstrap and css.",
        "Drawing a table and chart for scheduled operations while using chart.js",
        "Creating a movie list application while using IMDB API",
        "Developing a car selling application with Node JS, express Js, AJAX, and SQLite3.",
        "Developing a quiz application while using Typescript.",
        "Learned and practiced GIT.",
      ],
    },
    {
      title: "Internship",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Nov 2022",
      points: [
         "Experienced in working with customers both onsite and online, including conducting meetings and delivering presentations to analyze customer profiles and needs.",
         "Demonstrated the ability to work effectively in cross-functional teams and tackle challenges.",
         "Skilled in utilizing Power Automate and Power Automate Desktop to automate daily time consuming tasks, such as streamlining recruiting processes and submitting employee health reports to SGK (Social Security Insurance).",
         "Developed a D&I session app using Power Apps, allowing them to view and book sessions.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "What The Finance(WTFi)",
      description:
        "Developed a web-based solution leveraging Machine Learning techniques to predict sectoral financial distress and potential bankruptcy using data from the Central Bank of Türkiye.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "purple-text-gradient",
        },
      ],
      image: wtfiPoster,
      source_code_link: "https://github.com/WhatTheFinance",
    },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects, socials };
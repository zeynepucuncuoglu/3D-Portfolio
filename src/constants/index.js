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
    demanforecastplatform,
    flowops,
    pulsewatch,
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
      title: "DevOps Engineer",
      icon: backend,
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
  ];
  
  const experiences = [
    {
      title: "Intern, Web Developer",
      company_name: "Netcad Yazılım A.Ş",
      icon: netcad,
      iconBg: "#383E56",
      date: "Aug 2021 - Sep 2021",
      points: [
        "Built user-friendly systems and apps using JavaScript, Node.js, and SQLite3.",
        "Gained practical experience with Git and modern web development frameworks.",
      ],
    },
    {
      title: "Customer Success Intern → Associate (Part-time)",
      company_name: "Microsoft Turkey",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Nov 2022",
      points: [
        "Delivered Power Platform solutions to support enterprise digital transformation initiatives.",
        "Automated business workflows using Power Automate and Power Automate Desktop, reducing manual processes.",
        "Developed a Power Apps-based D&I session platform for booking and management.",
        "Conducted customer meetings and presentations to analyze requirements and propose solutions.",
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
      name: "Demand Forecast Platform",
      description:
        "Microservices platform for real-time inventory tracking, order management, and ML-powered demand forecasting — event-driven architecture with Kafka, JWT auth, circuit breaking, and automated alerting.",
      tags: [
        {
          name: "Java/Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Apache Kafka",
          color: "green-text-gradient",
        },
        {
          name: "Python/FastAPI",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "purple-text-gradient",
        },
      ],
      image: demanforecastplatform,
      source_code_link: "https://github.com/zeynepucuncuoglu/inventoryprj",
    },
    {
      name: "FlowOps",
      description:
        "PEGA-style telecom case management system with skill-based routing engine, rule-driven workflow transitions, full observability stack (Prometheus, Grafana, ELK, Jaeger), and Kubernetes deployment with HPA.",
      tags: [
        {
          name: "Java/Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Kubernetes",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "Prometheus/Grafana",
          color: "purple-text-gradient",
        },
      ],
      image: flowops,
      source_code_link: "https://github.com/zeynepucuncuoglu/flowOps",
    },
    {
      name: "PulseWatch",
      description:
        "Python CLI for real-time microservice log analysis — error fingerprinting via token normalization, Z-score anomaly detection over rolling windows, heuristic root-cause rules, and automated Slack/PagerDuty alerting.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Click/Rich",
          color: "green-text-gradient",
        },
        {
          name: "Z-score Analysis",
          color: "pink-text-gradient",
        },
        {
          name: "PagerDuty/Slack",
          color: "purple-text-gradient",
        },
      ],
      image: pulsewatch,
      source_code_link: "https://github.com/zeynepucuncuoglu/PulseWatch",
    },
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
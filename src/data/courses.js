// src/data/courses.js

const courses = [
  {
    id: 1,
    slug: "java-full-stack-development",
    title: "Java Full Stack Development",
    category: "Full Stack",
    level: "Beginner to Advanced",
    duration: "6 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Master Java, Spring Boot, MySQL, React and build production-ready full stack applications.",
    description:
      "A complete industry-focused Java Full Stack course covering core Java, OOPs, JDBC, Servlets, Spring Boot, REST APIs, React, Git and deployment.",
    modules: [
      "Programming Fundamentals",
      "Core Java + OOPs",
      "Collections + Exception Handling",
      "JDBC + SQL + MySQL",
      "Servlet + JSP Basics",
      "Spring Boot + REST APIs",
      "React Frontend",
      "Authentication + Security",
      "Projects + Deployment",
      "Interview Preparation",
    ],
    outcomes: [
      "Become Full Stack Java Developer",
      "Build Real Projects",
      "Backend + Frontend Mastery",
      "Interview Ready Skills",
      "Resume Ready Portfolio",
      "Placement Support",
    ],
  },

  {
    id: 2,
    slug: "python-full-stack-development",
    title: "Python Full Stack Development",
    category: "Full Stack",
    level: "Beginner to Advanced",
    duration: "6 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Learn Python, Django, APIs, React and deploy complete modern web applications.",
    description:
      "Comprehensive Python Full Stack program covering Python fundamentals, Django backend, database systems, APIs and frontend integration.",
    modules: [
      "Python Fundamentals",
      "OOP in Python",
      "Django Framework",
      "REST APIs",
      "PostgreSQL / MySQL",
      "React Frontend",
      "Authentication",
      "Projects",
      "Deployment",
      "Interview Training",
    ],
    outcomes: [
      "Python Full Stack Readiness",
      "Real Project Experience",
      "Backend Logic Skills",
      "Frontend Integration",
      "Interview Preparation",
      "Placement Guidance",
    ],
  },

  {
    id: 3,
    slug: "frontend-development-react",
    title: "Frontend Development with React",
    category: "Frontend",
    level: "Beginner to Intermediate",
    duration: "4 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Learn HTML, CSS, JavaScript, React and build responsive modern websites.",
    description:
      "Practical frontend development course focused on UI building, responsive design, React components, routing and deployment.",
    modules: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Responsive Design",
      "React Basics",
      "React Router",
      "API Integration",
      "Portfolio Projects",
    ],
    outcomes: [
      "Frontend Developer Skills",
      "Modern UI Building",
      "Responsive Design Mastery",
      "React Project Portfolio",
    ],
  },

  {
    id: 4,
    slug: "backend-development-nodejs",
    title: "Backend Development with Node.js",
    category: "Backend",
    level: "Intermediate",
    duration: "4 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Build scalable APIs using Node.js, Express, MongoDB and authentication systems.",
    description:
      "Backend engineering program covering server-side development, REST APIs, JWT auth, databases and deployment workflows.",
    modules: [
      "Node.js Basics",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "REST API Design",
      "Security Practices",
      "Deployment",
    ],
    outcomes: [
      "Backend API Development",
      "Database Design Skills",
      "Authentication Systems",
      "Production Deployment",
    ],
  },

  {
    id: 5,
    slug: "data-science-python",
    title: "Data Science with Python",
    category: "Data",
    level: "Beginner to Intermediate",
    duration: "5 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Learn Python, NumPy, Pandas, visualization and machine learning foundations.",
    description:
      "Career-focused data science course covering analysis, visualization, statistics and machine learning workflows.",
    modules: [
      "Python for Data",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Statistics Basics",
      "Machine Learning Intro",
      "Projects",
      "Case Studies",
    ],
    outcomes: [
      "Data Analysis Skills",
      "ML Foundations",
      "Dashboard Thinking",
      "Portfolio Projects",
    ],
  },

  {
    id: 6,
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    category: "UI/UX",
    level: "Beginner",
    duration: "3 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Learn wireframing, user research, prototyping and modern UI design systems.",
    description:
      "Hands-on UI/UX course using Figma and design thinking for apps and websites.",
    modules: [
      "Design Principles",
      "User Research",
      "Wireframes",
      "Figma Tools",
      "Design Systems",
      "Prototype Creation",
      "Case Studies",
    ],
    outcomes: [
      "UI/UX Fundamentals",
      "Portfolio Designs",
      "Figma Mastery",
      "Product Design Thinking",
    ],
  },

  {
    id: 7,
    slug: "devops-cloud-engineering",
    title: "DevOps & Cloud Engineering",
    category: "Backend",
    level: "Intermediate",
    duration: "5 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Master Linux, Git, Docker, CI/CD, AWS basics and deployment automation.",
    description:
      "Industry-ready DevOps training for deployment pipelines, containers and cloud workflows.",
    modules: [
      "Linux Basics",
      "Git & GitHub",
      "Docker",
      "CI/CD Pipelines",
      "AWS Basics",
      "Monitoring",
      "Project Deployment",
    ],
    outcomes: [
      "Deployment Skills",
      "Cloud Readiness",
      "Automation Mindset",
      "DevOps Projects",
    ],
  },

  {
    id: 8,
    slug: "software-testing-qa",
    title: "Software Testing & QA",
    category: "Backend",
    level: "Beginner",
    duration: "3 Months",
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Manual testing, automation basics, bug tracking and QA lifecycle mastery.",
    description:
      "Testing-focused course covering SDLC, STLC, manual testing, Selenium basics and reporting.",
    modules: [
      "Testing Fundamentals",
      "Manual Testing",
      "Test Cases",
      "Bug Tracking",
      "Selenium Basics",
      "QA Projects",
    ],
    outcomes: [
      "QA Engineer Readiness",
      "Testing Documentation",
      "Automation Intro",
      "Interview Preparation",
    ],
  },
];

export default courses;
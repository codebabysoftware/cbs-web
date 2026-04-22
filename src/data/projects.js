// src/data/projects.js

const projects = [
  {
    id: 1,
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    category: "AI",
    type: "Industrial",
    duration: "2 - 4 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Generate ATS-friendly resumes tailored to job descriptions using AI.",
    description:
      "A smart resume platform that rewrites resumes for specific job roles using AI, improves ATS score and exports polished resumes.",
    technologies: [
      "React",
      "Node.js",
      "OpenAI API",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "AI Resume Generation",
      "ATS Optimization",
      "Job Description Matching",
      "PDF Export",
      "Dashboard",
      "Authentication",
    ],
    deliverables: [
      "Source Code",
      "Deployment Support",
      "Documentation",
      "UI Design",
      "Testing Support",
    ],
  },

  {
    id: 2,
    slug: "student-management-system",
    title: "Student Management System",
    category: "Academic",
    type: "Major",
    duration: "1 - 3 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Manage students, attendance, fees and reports through one portal.",
    description:
      "A complete academic management system for colleges and institutes to track students, marks, attendance and fees.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "React",
    ],
    features: [
      "Student Records",
      "Attendance",
      "Fees Module",
      "Report Cards",
      "Admin Dashboard",
      "Notifications",
    ],
    deliverables: [
      "Source Code",
      "Project Report",
      "PPT",
      "DB Schema",
      "Setup Help",
    ],
  },

  {
    id: 3,
    slug: "online-voting-system",
    title: "Online Voting System",
    category: "Academic",
    type: "Mini",
    duration: "1 - 2 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Secure digital voting platform with authentication and results.",
    description:
      "A web-based secure voting platform with voter login, encrypted ballots and result dashboard.",
    technologies: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
    ],
    features: [
      "Secure Login",
      "Vote Casting",
      "Live Results",
      "Admin Panel",
      "Role Management",
    ],
    deliverables: [
      "Source Code",
      "Documentation",
      "Database",
      "Deployment Help",
    ],
  },

  {
    id: 4,
    slug: "ecommerce-store",
    title: "E-Commerce Store",
    category: "Website",
    type: "Industrial",
    duration: "3 - 5 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Modern shopping website with cart, payments and admin panel.",
    description:
      "A scalable e-commerce platform with product management, secure payments, cart and order tracking.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    features: [
      "Product Listings",
      "Cart",
      "Checkout",
      "Payment Gateway",
      "Admin Dashboard",
      "Order Tracking",
    ],
    deliverables: [
      "Source Code",
      "Deployment",
      "UI Design",
      "Training",
    ],
  },

  {
    id: 5,
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Academic",
    type: "Major",
    duration: "2 - 4 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Manage patients, doctors, billing and appointments efficiently.",
    description:
      "Healthcare ERP-style platform for hospitals to manage appointments, staff, patients and billing.",
    technologies: [
      "Java",
      "MySQL",
      "React",
      "Spring Boot",
    ],
    features: [
      "Appointments",
      "Doctor Panel",
      "Billing",
      "Patient History",
      "Reports",
    ],
    deliverables: [
      "Source Code",
      "Documentation",
      "Presentation",
      "Setup Guide",
    ],
  },

  {
    id: 6,
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Website",
    type: "Mini",
    duration: "3 - 7 Days",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Professional personal portfolio website for students and developers.",
    description:
      "Premium responsive portfolio site to showcase skills, resume, projects and contact details.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Responsive Design",
      "Projects Showcase",
      "Resume Section",
      "Contact Form",
    ],
    deliverables: [
      "Live Website",
      "Source Code",
      "Deployment",
    ],
  },

  {
    id: 7,
    slug: "attendance-tracker-app",
    title: "Attendance Tracker App",
    category: "Mobile",
    type: "Mini",
    duration: "1 - 2 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Mobile app for attendance tracking and student reports.",
    description:
      "Android/iOS compatible attendance management application for institutes and companies.",
    technologies: [
      "Flutter",
      "Firebase",
      "Dart",
    ],
    features: [
      "QR Attendance",
      "Reports",
      "Notifications",
      "Cloud Sync",
    ],
    deliverables: [
      "APK Build",
      "Source Code",
      "Database Setup",
    ],
  },

  {
    id: 8,
    slug: "erp-business-suite",
    title: "ERP Business Suite",
    category: "Industrial",
    type: "Industrial",
    duration: "4 - 8 Weeks",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Custom ERP for inventory, HR, finance and operations.",
    description:
      "Enterprise software for growing businesses to streamline operations, HR, inventory and finance.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Inventory",
      "HRMS",
      "Finance Reports",
      "Analytics",
      "Role Access",
    ],
    deliverables: [
      "Source Code",
      "Deployment",
      "Training",
      "Maintenance Support",
    ],
  },
];

export default projects;
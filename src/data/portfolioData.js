/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this single file to update your personal information, skills,
 * projects, work experience, education, and contact links.
 */

export const portfolioData = {
  // Personal & Brand Information
  personal: {
    name: "Prabakaran M",
    logoText: "PRABAKARAN.",
    role: "WordPress Developer | Web Developer",
    heroKicker: "WORDPRESS DEVELOPER · WEB DEVELOPER",
    heroHeadline: {
      part1: "Building digital",
      highlight: "experiences that work.",
    },
    heroSubtitle:
      "I build responsive WordPress websites and WooCommerce experiences with a focus on usability, performance, and clean design.",
    
    // Availability Indicator (editable)
    availability: {
      status: "Available for new opportunities",
      isAvailable: true,
    },

    // Verified Professional Summary
    summary:
      "Results-driven Web Developer with 1+ year of experience specializing in WordPress development and e-commerce solutions. Experienced in developing responsive, user-friendly websites and WooCommerce stores, customizing themes and plugins, integrating payment gateways, and optimizing website performance.",
    
    // Verified Contact Info
    email: "mprabakaran123456@gmail.com",
    phone: "+91 9342795117",
    location: "Virudhunagar, Tamil Nadu, India",
    
    // Resume link (points to public/Prabakaran_Resume_New.pdf)
    resumeUrl: "/Prabakaran_Resume_New.pdf",

    // Social Links (hidden automatically if left as empty string "")
    // Paste your real profile URLs here when ready!
    socialLinks: {
      github: "",   // e.g. "https://github.com/your-username"
      linkedin: "", // e.g. "https://linkedin.com/in/your-username"
      twitter: "",  // e.g. "https://x.com/your-username"
    },
  },

  // Technical Skills grouped into readable categories
  skills: [
    {
      category: "Frontend Development",
      description: "Crafting structured, mobile-ready interfaces with modern standards.",
      iconName: "Layout",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Cross-Browser Compatibility",
      ],
    },
    {
      category: "Backend Development",
      description: "Powering dynamic website functionality, data, and secure transactions.",
      iconName: "Server",
      items: [
        "PHP",
        "MySQL Fundamentals",
        "Payment Gateway Integration",
        "WordPress Actions & Filters",
        "REST API Basics",
      ],
    },
    {
      category: "WordPress & WooCommerce",
      description: "End-to-end CMS architecture, theme customization, and e-commerce.",
      iconName: "ShoppingBag",
      items: [
        "WordPress CMS",
        "WooCommerce",
        "Theme Customization",
        "Plugin Customization",
        "Product Management",
        "Cart & Checkout Flows",
      ],
    },
    {
      category: "Tools & Optimization",
      description: "Workflows for domain hosting, server configuration, security, and performance.",
      iconName: "Wrench",
      items: [
        "Domain Management",
        "Domain and DNS Configuration",
        "Server Configuration",
        "Website Hosting Setup",
        "Website Deployment and Troubleshooting",
        "Git & Version Control",
        "Website Security Updates",
        "SEO Optimization",
        "Performance Optimization",
        "Canva",
        "Adobe Photoshop (basic)",
      ],
    },
  ],

  // Projects (grounded in verified resume data)
  projects: [
    {
      id: "woocommerce-ecommerce",
      title: "WooCommerce E-commerce Websites",
      category: "E-Commerce Solution",
      description:
        "Developed and customized full-featured e-commerce websites using WordPress and WooCommerce. Built structured product catalogs, shopping cart functionality, payment gateway integrations, order management systems, and tailored theme/plugin customizations.",
      highlights: [
        "Configured dynamic product catalogs with attributes, categories, and inventory tracking.",
        "Integrated secure payment gateways and streamlined multi-step checkout processes.",
        "Customized WooCommerce templates, action hooks, and responsive shopping cart styling.",
        "Implemented order status notifications and back-office order management workflows.",
      ],
      tags: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "JavaScript",
        "CSS3",
        "Payment Gateways",
        "E-commerce",
      ],
      image: "/images/projects/woocommerce-preview.webp",
      imageAlt: "WooCommerce E-commerce Website Architecture and Checkout Interface Preview",
      liveUrl: "",   // Add your live demo URL here when available
      githubUrl: "", // Add your code repository URL here when available
    },
    {
      id: "wordpress-business",
      title: "WordPress Business Website",
      category: "Corporate Web Platform",
      description:
        "Developed a responsive corporate business website using WordPress, HTML5, CSS3, JavaScript, and PHP. Tailored page layouts, custom headers, footers, interactive navigation menus, and essential business plugins for speed and usability.",
      highlights: [
        "Designed clean, responsive page templates that scale seamlessly from mobile to desktop.",
        "Customized header branding, sticky navigation menus, and multi-column footer layouts.",
        "Integrated contact mechanisms, lead capture workflows, and optimized plugins.",
        "Ensured cross-browser compatibility, fast page load speeds, and foundational on-page SEO.",
      ],
      tags: [
        "WordPress",
        "PHP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Cross-Browser",
      ],
      image: "/images/projects/wordpress-business-preview.webp",
      imageAlt: "WordPress Corporate Business Website Desktop and Mobile Responsive Preview",
      liveUrl: "",   // Add your live demo URL here when available
      githubUrl: "", // Add your code repository URL here when available
    },
  ],

  // Work Experience (grounded in verified resume data)
  experience: [
    {
      role: "Web Developer",
      company: "Codingrim Technology Solutions Private Limited",
      period: "September 2025 – August 2026",
      badge: "Full-time",
      location: "Tamil Nadu, India",
      responsibilities: [
        "Developed and maintained responsive WordPress websites for diverse business needs.",
        "Built and customized WooCommerce e-commerce websites with end-to-end shopping journeys.",
        "Worked with product catalogs, shopping carts, payment gateway integrations, and order management.",
        "Customized WordPress themes and plugins to deliver tailored layouts and specialized functionality.",
        "Assisted with technical support and client training for content updates and store administration.",
        "Worked on website security updates, troubleshooting, bug fixes, and performance optimization.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Codingrim Technology Solutions Private Limited",
      period: "May 2025 – August 2025",
      badge: "Internship",
      location: "Tamil Nadu, India",
      responsibilities: [
        "Assisted with WordPress website and WooCommerce development across ongoing projects.",
        "Supported website testing, debugging, and cross-browser responsiveness on mobile and desktop.",
        "Learned development best practices, Git version control, and professional project workflows.",
      ],
    },
  ],

  // Education (grounded in verified resume data)
  education: [
    {
      degree: "M.Sc. Computer Science",
      institution: "Arulmigu Kalasalingam College of Arts and Science, Krishnankoil",
      affiliation: "Affiliated with Madurai Kamaraj University",
      period: "2023 – 2025",
      level: "Postgraduate Degree",
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Arulmigu Kalasalingam College of Arts and Science, Krishnankoil",
      affiliation: "Affiliated with Madurai Kamaraj University",
      period: "2020 – 2023",
      level: "Undergraduate Degree",
    },
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};

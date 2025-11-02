const projects = [
  // 1. VibeWoods
  {
    id: "vibe-woods",
    title: "Vibe Woods",
    subtitle: "Rebranding, logo redesign, videography, and digital marketing.",
    image: "vibewoodslogo.png",
    tags: ["Branding", "Videography", "Digital Marketing"],
    highlights: [
      { label: "Brand Recall", value: "+70%" },
      { label: "Engagement", value: "Increased" },
      { label: "Delivery", value: "5 Weeks" }
    ],
    summary: `Vibe Woods underwent a complete rebranding with updated visuals and marketing strategy.`,
    problem: `Their brand identity felt outdated and inconsistent with their quality of work.`,
    approach: `Redesigned logo, created brand kit, shot professional videos, and managed digital campaigns.`,
    result: `Strong, consistent brand image with improved audience engagement.`
  },
  // 2. JH Group
  {
    id: "jh-group",
    title: "JH Group",
    subtitle: "Website design and digital catalogue creation.",
    image: "jhlogo.png",
    tags: ["Website", "Catalogue", "Branding"],
    highlights: [
      { label: "Online Reach", value: "+50%" },
      { label: "Projects Shown", value: "30+" },
      { label: "Launch Time", value: "3 Weeks" }
    ],
    summary: `Created a professional website and detailed project catalogue to enhance their credibility.`,
    problem: `They lacked an online portfolio to showcase projects and attract clients.`,
    approach: `Developed a responsive website and digital catalogue, optimized for project display.`,
    result: `Improved client trust and lead generation.`
  },
  // 3. KDM
  {
    id: "kdm-constructions",
    title: "KDM Constructions",
    subtitle: "Rebranding, website, and content creation.",
    image: "kdmlogo.png",
    tags: ["Branding", "Website", "Digital Marketing"],
    highlights: [
      { label: "Brand Awareness", value: "+70%" },
      { label: "Leads", value: "+40%" },
      { label: "Completion", value: "6 Weeks" }
    ],
    summary: `Rebranded KDM Constructions with a modern look and stronger online voice.`,
    problem: `They needed a fresh identity and an improved online strategy.`,
    approach: `Created new logo, website, and marketing content for better positioning.`,
    result: `Enhanced visibility and established a consistent brand tone.`
  },
  // 4. BDS
  {
    id: "beats-school",
    title: "Beats School of Dance and Art",
    subtitle: "Logo redesign, video editing, and graphics creation.",
    image: "bds.jpg",
    tags: ["Logo", "Video Editing", "Graphics"],
    highlights: [
      { label: "Brand Recall", value: "+55%" },
      { label: "Content Output", value: "3x" },
      { label: "Delivery", value: "4 Weeks" }
    ],
    summary: `Refreshed the brand's visual appeal through creative graphics and video content.`,
    problem: `The existing logo and visuals didn't represent their vibrant artistic spirit.`,
    approach: `Redesigned visuals, enhanced branding, and edited promotional videos.`,
    result: `Attracted more students and boosted engagement on digital platforms.`
  },
  // 5. Mathrushree
  {
    id: "mathrushree-architect",
    title: "Mathrushree Architect",
    subtitle: "Logo design, website creation, and digital marketing consultancy.",
    image: "mathrushree.png",
    tags: ["Logo Design", "Website", "Digital Marketing"],
    highlights: [
      { label: "Online Reach", value: "+45%" },
      { label: "Brand Visibility", value: "Improved" },
      { label: "Launch Time", value: "4 Weeks" }
    ],
    summary: `We helped Mathrushree Architect establish their digital presence with a custom logo, modern website, and advertising strategy.`,
    problem: `They lacked an online identity, making it hard to attract potential clients and showcase their work.`,
    approach: `Designed a professional logo, developed a sleek website, and guided them through ad campaigns for digital marketing.`,
    result: `Achieved strong brand recognition and consistent online engagement across platforms.`
  },
  // 6. KBS
  {
    id: "kumar-building-solutions",
    title: "Kumar Building Solutions",
    subtitle: "Built an e-commerce website and handled full digital marketing setup.",
    image: "kumar.jpg",
    tags: ["E-commerce", "Website", "Digital Marketing"],
    highlights: [
      { label: "Online Sales", value: "+60%" },
      { label: "Leads", value: "Doubled" },
      { label: "Setup Time", value: "6 Weeks" }
    ],
    summary: `Developed a full-fledged online store with e-forms for purchasing and catalog browsing.`,
    problem: `The client didn't have a digital platform to display or sell their building products.`,
    approach: `Created a user-friendly website, added e-commerce functionality, and ran social media marketing campaigns.`,
    result: `Boosted inquiries and online purchases while improving their market visibility.`
  },
  // 7. A5
  {
    id: "a5-motors",
    title: "A5 Motors",
    subtitle: "Database, billing software, and website consultancy.",
    image: "a5logo.png",
    tags: ["Software", "Database", "Website"],
    highlights: [
      { label: "Efficiency", value: "+75%" },
      { label: "Customer Reach", value: "+40%" },
      { label: "Delivery", value: "5 Weeks" }
    ],
    summary: `Developed systems to manage data, billing, and online presence for A5 Motors.`,
    problem: `Manual processes made it hard to manage sales and customer data.`,
    approach: `Built a database and billing software with integrated web presence.`,
    result: `Simplified management and improved client tracking.`
  },
  // 8. Janani
  {
    id: "janani-fitness-centre",
    title: "Janani Fitness Centre",
    subtitle: "Developed billing & admission software and website.",
    image: "jnn.jpg",
    tags: ["Software", "Website", "Digital Marketing"],
    highlights: [
      { label: "Process Efficiency", value: "+80%" },
      { label: "Customer Retention", value: "+35%" },
      { label: "Launch Time", value: "6 Weeks" }
    ],
    summary: `Provided an all-in-one management solution for billing, admissions, and digital growth.`,
    problem: `Manual billing and admissions slowed down their workflow.`,
    approach: `Built a software system for automation and a user-friendly website with digital consultancy.`,
    result: `Streamlined operations and increased membership engagement.`
  },

  // --- Remaining ones ---
  {
    id: "nv-fit-hub",
    title: "NV Fit Hub",
    subtitle: "Website for inquiries, admissions, and event visibility.",
    image: "nvfithublogo.png",
    tags: ["Website", "Events", "Digital Marketing"],
    highlights: [
      { label: "Admissions", value: "+50%" },
      { label: "User Inquiries", value: "+65%" },
      { label: "Launch Time", value: "4 Weeks" }
    ],
    summary: `Built a dynamic website to promote NV Fit Hub's programs and events.`,
    problem: `They lacked a platform for potential members to explore and inquire.`,
    approach: `Developed an interactive site with details, enquiry forms, and event updates.`,
    result: `Higher conversions and stronger community engagement.`
  },
  {
    id: "b4-tutorials",
    title: "B4 Tutorials",
    subtitle: "Website design and online presence consultancy.",
    image: "b4logo.png",
    tags: ["Website", "Education", "Digital Marketing"],
    highlights: [
      { label: "Reach", value: "+60%" },
      { label: "Enrollment", value: "Increased" },
      { label: "Setup Time", value: "3 Weeks" }
    ],
    summary: `Created an educational website for B4 Tutorials with guidance on online visibility.`,
    problem: `They didn't have an online space to attract and manage students.`,
    approach: `Designed a simple, informative website and planned reach-building strategies.`,
    result: `Expanded online visibility and attracted more student inquiries.`
  },
  {
    id: "monocraft",
    title: "Monocraft",
    subtitle: "Logo design, website, and digital consultation.",
    image: "https://via.placeholder.com/1200x600?text=Monocraft",
    tags: ["Logo Design", "Website", "Consulting"],
    highlights: [
      { label: "Brand Identity", value: "Rebuilt" },
      { label: "Engagement", value: "+50%" },
      { label: "Launch", value: "5 Weeks" }
    ],
    summary: `Monocraft partnered with us for a creative overhaul including branding and digital growth.`,
    problem: `They lacked a professional digital identity and marketing consistency.`,
    approach: `Designed a unique logo, website, and provided tint & shade-based visuals.`,
    result: `Achieved a sleek, cohesive, and well-performing digital brand.`
  },
  {
    id: "blahk",
    title: "Blahk",
    subtitle: "Website, marketing, and content production.",
    image: "https://via.placeholder.com/1200x600?text=Blahk",
    tags: ["Website", "Digital Marketing", "Videography"],
    highlights: [
      { label: "Content Output", value: "+4x" },
      { label: "Engagement", value: "+65%" },
      { label: "Launch", value: "5 Weeks" }
    ],
    summary: `Handled full-spectrum digital creation including photography, videography, and content strategy.`,
    problem: `Blahk needed a cohesive online brand image and content structure.`,
    approach: `Built their website, curated visuals, and ran strategic marketing campaigns.`,
    result: `Achieved strong content performance and improved digital reach.`
  },
  {
    id: "impirials",
    title: "Impirials",
    subtitle: "Website and digital marketing campaign.",
    image: "https://via.placeholder.com/1200x600?text=Impirials",
    tags: ["Website", "Digital Marketing"],
    highlights: [
      { label: "Reach", value: "+50%" },
      { label: "Leads", value: "+30%" },
      { label: "Launch", value: "3 Weeks" }
    ],
    summary: `Designed a clean website and executed digital marketing for Impirials.`,
    problem: `They needed an updated website and a solid online lead generation strategy.`,
    approach: `Created a conversion-focused website and managed ads for maximum ROI.`,
    result: `Boosted lead flow and brand recognition online.`
  }
];

export default projects;

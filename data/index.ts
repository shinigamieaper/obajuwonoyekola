
"use client";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Case-Studies", link: "#case-studies" },
  { name: "Services", link: "#services" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "After years of developing my expertise in both marketing and development, I realized that businesses needed something more: clear strategies linked to real financial outcomes.",
    description: " About me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
   titleClassName: "text-left "

  },
  {
    id: 2,
    title: "Adaptable across different time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Certifications",
    description: "Professional Achievements",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about development, AI, and data-driven problem-solving",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I've Been A Digital Marketer For",
    description: "Digital Marketing Experience",
    className: "md:col-span-3 md:row-span-2 relative overflow-hidden",
    imgClassName: "absolute inset-0 w-full h-full object-cover opacity-50 z-[0] transform scale-140 blur-[1px] sm:scale-[100%] sm:right-[-40%] md:scale-[120%] md:right-[-20%] lg:scale-[120%]",
    titleClassName: "relative z-10 ",
    img: "/profile.png",
    spareImg: "/grid.svg",
  },
    
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Services
export const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging interfaces.",
    expandedContent: `I create user interfaces that are not just visually appealing but also strategically designed for usability and conversion. My process includes:

- In-depth user research
- Wireframing & prototyping
- High-fidelity design
- Usability testing

Let's transform your ideas into compelling digital experiences.`,
    image: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building responsive and performant web apps.",
    expandedContent: `I develop modern web applications using cutting-edge technologies. My approach includes:

- Responsive design
- Performance optimization
- SEO best practices
- Cross-browser compatibility

From landing pages to complex web applications, I deliver scalable solutions.`,
    image: "/p2.png",
    iconLists: ["/next.svg", "/ts.svg"]
  },
  {
    id: 3,
    title: "Product Strategy",
    description: "Crafting data-driven product roadmaps.",
    expandedContent: `I help transform business ideas into successful digital products:

- Market research
- User persona development
- Feature prioritization
- Growth strategy

Let's turn your vision into a market-ready product.`,
    image: "/p3.png",
    iconLists: ["/git.svg", "/link.svg"]
  }
];
export const portfolioItems = [
  {
    title: "Meta Ads Campaign",
    image: "/path/to/meta-ads-image.jpg",
    category: "PPC Ads",
    performance: "CTR: 8.9%",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },
  {
    title: "Perfume Brand Identity",
    image: "/path/to/perfume-branding.jpg",
    category: "Branding",
    performance: "Top Performing",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    title: "TikTok Promo Design",
    image: "/path/to/tiktok-promo.jpg",
    category: "Social Media",
    performance: "Viral Reach",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  // Add more portfolio items as needed
];


export const projects = [
  {
    id: 1,
    title: "9jaSchoolsHub Product Roadmap",
    des: "A roadmap outlining features, timelines, and updates for 9jaSchoolsHub.",
    img: "/p4.png",
    iconLists: ["/Notion.jpg", "/google.jpg"],
    link: "https://cobalt-ball-550.notion.site/9ja-School-Hub-Product-Roadmap-188808a6964880bd83e9ceb270c22b7f", // Replace with your Notion roadmap
  },
  {
    id: 2,
    title: "Graphics & Video Work",
    des: "A collection of design and video projects, including brand visuals and social media content.",
    img: "/p2.png",
    iconLists: ["/capcut.jpg","/canva.jpg", "/davinci.jpg"],
    link: "https://cobalt-ball-550.notion.site/My-Designer-gallery-1b1808a6964880289d99c59aa0816b24", // Replace with Google Drive/Notion link
  },
  {
    id: 3,
    title: "Product & Marketing Docs",
    des: "PRDs, content calendars, and strategy documents for marketing and product management.",
    img: "/p3.png",
    iconLists: ["/Notion.jpg", "/google.jpg", ],
    link: "https://cobalt-ball-550.notion.site/1b1808a6964880a494b7c1d5a15eca6a?v=1b1808a69648808c8384000c1c8", // Replace with Notion/Docs link
  },
  {
    id: 4,
    title: "Portfolio Website",
    des: "A portfolio built with Next.js 14,Tailwind Css,showcasing skills in development, product marketing, and design.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", ],
    link: "https://oyekolaobajuwon.vercel.app/", // Replace with your real URL
  },

];


export const leftLists = [
  'Next.js', 'TypeScript', 'React.js', 'Tailwind CSS'
];

export const rightLists = [
  'Node.js', 'Express.js', 'MongoDB', 'Git/GitHub'
];

export const testimonials = [
  {
    quote:
      "Juwon is a brilliant individual. I had the opportunity to work with him on 9jaSchoolsHub, and I was truly impressed by his strong work ethic, excellent collaboration skills, and outstanding team spirit.",
    name: "Olorunkiya Samuel",
    title: "Co-Product Manager(9jaSchoolsHub) ",
  },

  {
   quote:
     "Obajuwon's attention to detail in both design and development is impressive. He created a sleek and functional website that elevated our brand’s online presence.",
   name: "Tolu Adebayo",
    title: "Creative Director, jp media",
},
  {
    quote:
      "I needed branding and marketing support for my startup, and Obajuwon delivered beyond expectations. His work on positioning and messaging gave us a competitive edge.",
    name: "Sandra Eze",
    title: "Founder, Digital Upstart",
  },
];

/*export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];*/

export const workExperience = [
  {
    id: 1,
    title: "Assistant Product Manager|Product Marketing Manager - Sqwads",
    desc: "Managing product development and marketing strategies, ensuring seamless collaboration between teams.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Co-Product Manager - 9jaSchoolsHub(Open-source)",
    desc: "Leading the product roadmap and user engagement strategies for an education-focused platform.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: " Digital Marketing Intern - Unique Style Hub",
    desc: "Created graphics, videos, and content calendars for a fashion-focused brand.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Freelance Product Marketing & Design",
    desc: "Working with diverse clients on branding, marketing campaigns, and product positioning.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
 
{

  id: 5,
  title: "Coding Trainee - ESSYP Technologies",
  desc: "Built a strong foundation in software development, learning core programming concepts and best practices.",
  className: "md:col-span-2",
  thumbnail: "/exp1.svg",
},
{
  id: 6,
  title: "Freelance Web Developer",
  desc: "Developing responsive and high-performance websites for clients, focusing on user experience and functionality.",
  className: "md:col-span-2",
  thumbnail: "/exp4.svg",
},
  
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shinigamieaper", 
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.linkedin.com/in/abdulsalam-oyekola-017b67346/", // Replace with Notion/Docs link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/obajuwon-oyekola-017b67346", 
  },
];

import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize Clear communication and collaboration ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
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
    title: "My tech stack",
    description: "I constantly try to improve",
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
    title: "Currently implementing AI into my different areas of expertise ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[500px] w-[350px] md:h-[400px] h-[250px] sm: h-[140px]", 
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
    
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
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
    link: "https://www.linkedin.com/in/abdulsalam-oyekola-017b67346/", 
  },
];

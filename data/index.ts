
"use client";

export const navItems = [
  { 
    name: "Home", 
    link: "", 
    subItems: [
      { name: "Hero", link: "#hero" },
      { name: "About", link: "#about" }
    ]
  },
  { 
    name: "My Work", 
    link: "", 
    subItems: [
      { name: "Portfolio", link: "#portfolio" },
      { name: "Services", link: "#services" },
      { name: "Case Studies", link: "#case-studies" }
    ]
  },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" }
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "I’m a Storyteller at heart and a Strategist by training. With a background in Marketing, Design, and Development, I help people and businesses worldwide bring their dreams to life and market them authentically. As a Freelancer, I collaborate with clients to craft narratives and strategies that connect.I believe Marketing is more than promotion,it’s Storytelling backed by Data, driven by Empathy, and nurtured through Community. Whether launching products or shaping narratives, I approach everything with Creativity, Clarity, and a commitment to making others feel Seen, Understood, and Empowered.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[50vh]",
   titleClassName: "font-body text-left"

  },
  {
    id: 2,
    title: "Adaptable across different time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "font-body justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Certifications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "font-body items-start justify-start pb-4",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
   title: " I Combine a Developer’s Logic with a Marketer’s Intuition and a Designer’s Eye to Build Campaigns and Platforms That Convert.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "font-body justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I've Been A Digital Marketer For",
    description: "And Counting",
    className: "md:col-span-3 md:row-span-2 relative font-body",
    imgClassName: "absolute inset-0 w-full h-full object-cover opacity-50 z-[0] transform  blur-[1px] sm:scale-[100%] sm:right-[-90%] md:scale-[100%]  md:right-[-20%] lg:scale-[120%]",
    titleClassName: "absolute font-body bottom-0 left-0 p-4 text-left z-10 text-lg lg:text-2xl w-full lg:items-right font- ",
    img: "/me.png",
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
    title: "Social Media Marketing That Builds Community",
    description: "Juwon creates strategies and content that grow engaged communities - not just follower counts.",
    expandedContent: {
      approach: [
        "Flywheel Strategy: He treats community as a growth engine — not an afterthought.",
        "Platform-Native Content: TikTok, LinkedIn, Instagram — each with its own voice and format.",
        "Story First, Sales Later: People follow stories, not products. Sales follow trust."
      ],
      delivers: [
        "Social strategy and content planning",
        "Caption writing and visual direction", 
        "Engagement ideas and community prompts",
        "Campaign rollout support and iteration"
      ],
      workWithHim: [
        "You get a creator who understands platforms deeply",
        "He's lived both sides — brand voice and content creator",
        "You walk away with a strategy, not just posts"
      ]
    },
    image: "/socialmedia.png",
    iconLists: ["/notionicon.png", "/canvaicon.png","/metaicon.png","/buffericon.png"]
  },
  {
    id: 2,
    title: "Content Writing That Connects",
    description: "From blogs to captions, Juwon writes with clarity, tone, and purpose , helping brands sound more human.",
    expandedContent: {
      approach: [
        "Voice Matching: Every word aligns with your brand tone — casual, formal, sharp, or warm.",
        "SEO-Aware Writing: While he’s not an SEO specialist (yet), he understands how to write with relevance, structure, and readability.",
        "Story-Led Structure: Headlines hook, subheaders guide, and CTAs convert."
      ],
      delivers: [
        "Blog posts, landing page copy, brand storytelling",
        "Social media captions and content calendars",
        "Light keyword inclusion and formatting",
        "Collaborative edits and tone refinement"
      ],
      workWithHim: [
        "He understands how to write for people, not just platforms",
        "His marketing background means your content is goal-driven",
        "You get clarity, structure, and story — not filler"
      ]
    },
    image: "/copy.png",
    iconLists: ["/notionicon.png", "/canvaicon.png"]
  },
  {
    id: 3,
    title: "PPC Ads That Actually Perform",
    description: " Juwon runs targeted, results-driven campaigns with Google Ads — built to convert, optimized to scale.",
    expandedContent: {
      approach: [
        "Audience-Led Planning: He dives deep into who you're targeting, then builds around their habits, needs, and triggers.",
        "User Persona Development: Creating detailed user Clear, Clickable Messaging: Ad copy and visuals are aligned to user intent.",
        "Ongoing Optimization: He doesn’t “set and forget.” Campaigns are tracked, tested, and iterated."
      ],
      delivers: [
        "Google Ads campaign setup & management",
        "Keyword research and segmentation",
        "Ad copy and creative support",
        "Weekly or monthly performance insights"
      ],
      workWithHim: [
        "He treats your budget like his ownr",
        "He’s focused on KPIs that actually matter — not vanity metrics",
        "THe brings creative thinking to ad strategy, not just numbers"
      ]
    },
    image: "/ads.png",
    iconLists: ["/gads.png", "/gtmicon.png"]
  },
   {
    id: 4,
    title: "Analytics That Guide Smarter Decisions",
    description: "With tools like GA4 and Microsoft Clarity, Juwon helps you understand user behavior and make better marketing decisions.",
    expandedContent: {
      approach: [
        "Market Research: Deep dive into user needs and market trends",
        "User Persona Development: Creating detailed user profiles",
        "Strategic Prioritization: Focusing on high-impact features"
      ],
      delivers: [
        "Comprehensive market analysis",
        "User persona documentation",
        "Feature prioritization framework",
        "Growth strategy roadmap"
      ],
      workWithHim: [
        "You get a strategic thinker, not just an executor",
        "Data-driven decision making",
        "Transforms vision into actionable plans"
      ]
    },
    image: "/analytics.png",
    iconLists: ["/ga4icon.png", "/mcicon.png"]
  },
   {
    id: 5,
    title: "Video Editing That Tells and Sells",
    description: " Juwon turns clips into stories that stick. From short-form content to promos, every edit is crafted to connect and convert.",
    expandedContent: {
      approach: [
        "Narrative First: Every video is built around a core message or mood — not just trends.",
        "Cross-Platform Thinking: He optimizes for where it will live — short-form, long-form, vertical, or wide.",
        "Sound + Motion: From background tracks to motion cues, everything is aligned with the story you want to tell."
      ],
      delivers: [
        "Short-form and long-form video edits",
        "Captions, callouts, and basic motion graphics",
        "Sound design (music curation, pacing, clean audio)",
        "Content aligned with your marketing or campaign goals"
      ],
      workWithHim: [
        "You get a storyteller, not just an editor",
        "He brings a marketer’s eye into every frame",
        "He understands pacing, tone, and the subtle cues that make people watch to the end"
      ]
    },
    image: "/videdit.png",
    imageClassName: "h-[100px]",
    iconLists: ["/davincicon.png", "/canvaicon.png"]
  },
  {
    id: 6,
    title: "Visual Branding That Speaks Before You Do",
    description: " Juwon  doesn’t just design for aesthetics — he designs for meaning. ",
    expandedContent: {
      approach: [
        "Emotion-Driven Visuals: Every design choice — from type to texture — is rooted in how you want people to feel about your brand.",
        "Brand-Led Systems: He creates branding that isn’t just pretty but functional — designed to scale across platforms and mediums.",
        "Research + Consistency: Color, typography, and layout choices are guided by a clear strategy, not random inspiration."
      ],
      delivers: [
        "Brand identity systems (logo, color palette, typography, usage guide)",
        "Marketing templates (socials, pitch decks, ads)",
        "Visual direction for campaigns or content series",
        "Feedback and revision loops that feel collaborative"
      ],
      workWithHim: [
        "He approaches branding like a marketer, not just a designer",
        "Every piece ties back to your story and your audience",
        "You’ll walk away with assets you can actually use — not just admire"
      ]
    },
    image: "/graphic.png",
    iconLists: [ "/canvaicon.png"]
  },
   {
    id: 7,
    title: "Human-Centered Web Development Backed by Strategy",
    description: " Juwon  builds responsive, fast, and user-friendly websites — blending marketing insight with technical execution.",
    expandedContent: {
      approach: [
        "Cross-Disciplinary Thinking: Juwon blends marketing, design, and development to build digital experiences that actually make sense to users — and drive results.",
        "lear Messaging Meets Clean Code: Every website he builds tells a story, framed by intentional copy and smooth functionality.",
        "Data-Backed Decisions: From layout to speed optimization, nothing is done on guesswork. Tools like GA4 and Clarity guide design and performance tweaks."
      ],
      delivers: [
        "Fully responsive, fast-loading websites",
        "Clean codebases built with Next.js",
        "Developer-friendly documentation for handoffs",
        "Developer-friendly documentation for handoffs"
      ],
      workWithHim: [
        "You’re not getting just a dev — you’re getting a strategist",
        "He’ll ask the right questions before touching a line of code",
        "Community-driven and empathetic, he builds with your audience in mind"
      ]
    },
    image: "/code.png",
    iconLists: ["/nexticon.png", "/ts.svg"]
  },
];



export const portfolioItems = [
  {
    title: "Perfume Brand Tips",
    image: "/coded graphics.png",
    category: "Design/Branding",
    performance: "Top Performing",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },
  {
    title: "Ecommerce Products Promo",
    image: "/ushgrapgics.png",
    category: "Design/Branding",
    performance: "Top Performing",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    title: "Tech Tips Carousel",
    image: "/sqwadsgraphics.png",
    category: "Design/Branding",
    performance: "Top Performing",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  
  
   {
    title: "Perfume Brand page",
    image: "/codedpage.png",
    category: "Social Media",
    performance: "30% increase in followers",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
   {
    title: "Ecommerce Brand page",
    image: "/ushpage.png",
    category: "Social Media",
    performance: "30% increase in engagement",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
  },
  // Add more portfolio items as needed
];


export const projects = [
  {
    id: 1,
    title: " The Coded Sensation",
    des: "A brand that had strong product potential but lacked the structure and direction to scale.",
    img: "/coded.png",
    iconLists: ["/notionicon.png", "/canvaicon.png", "/davincicon.png", "/metaicon.png", "/buffericon.png"],
    link: "https://cobalt-ball-550.notion.site/CODED-SENSATION-CASE-STUDY-1ef808a6964880c0a4e8fa9c47f7113a", // Replace with your Notion roadmap
  },
  {
    id: 2,
    title: "SQWADS ",

    des: "launching a brand-new tech platform with no prior presence and a tight budget.",
    img: "/SQWADS.png",
    iconLists: ["/notionicon.png","/canvaicon.png","/gtmicon.png","/mcicon.png","/metaicon.png","/buffericon.png"],
    link: "https://cobalt-ball-550.notion.site/SQWADS-CASE-STUDY-1ed808a6964880dd97bbe8494a21d036", // Replace with Google Drive/Notion link
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

export const companies = [
  {
    id: 1,
    name: "google analytics",
    img: "/ga4icon.png",
    nameImg: "/ga4name.png"
  },
  {
    id: 2,
    name: "NEXTJS",
    img: "/nexticon.png",
    nameImg: "/nextname.png"
  },
  {
    id: 3,
    name: "Google Tag Manager",
    img: "/gtmicon.png",
    nameImg: "/gtmname.png"
  },
  {
    id: 4,
    name: "Canva",
    img: "/canvaicon.png",
    nameImg: "/canvaname.png"
  },
  {
    id: 5,
    name: "google ads",
    img: "/gads.png",
    nameImg: "/gadsname.png"
  },
  {
    id: 6,
    name: "hubspot",
    img: "/hubspoticon.png",
    nameImg: "/hubspotname.png"

  },
  {
    id: 7,
    name: "notion",
    img: "/notionicon.png",
    nameImg: "/notionname.png"
  },
  {
    id: 8,
    name: "Davinci",
    img: "/davincicon.png",
    nameImg: "/davinciname.png"
  },
  {
    id: 9,
    name: "Microsift clarity",
    img: "/mcicon.png",
    nameImg: "/mcname.png"
  },
  {
    id: 10,
    name: "Buffer",
    img: "/buffericon.png",
    nameImg: "/buffername.png"
  },
  {
    id: 11,
    name: "Meta",
    img: "/metaicon.png",
    nameImg: "/metaname.png"
  },
 
];

export const workExperience = [
  {
    id: 1,
    title: "Product Marketing Manager/ Product Manager| - Sqwads",
    desc: "Managing product development and marketing strategies, ensuring seamless collaboration between teams.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  {
    id: 3,
    title: " Digital Marketing Intern - Unique Style Hub",
    desc: "Created graphics, videos, and content calendars for an online  Ecommerce brand.",
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

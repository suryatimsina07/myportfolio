import { Paintbrush, Layers, FileJson } from "lucide-react";


export const LINKS = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "portfolio",
    path: "/portfolio",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

export const ACCORDION = [
  {
    question: "Who are you and what do you do?",
    answer:'Null',
  },
  {
    question: "What technologies are you proficient in?",
    answer: "I'm proficient in C++, JavaScript, HTML, CSS, and various frameworks.",
  },
  {
    question: "Can you describe your communication style?",
    answer:
      "I communicate clearly and openly, ensuring everyone is on the same page.",
  },
];

export const EDUCATION = [
  {
    title: "Vilas Aesthitcs - Calagry, Canada",
    year: "Currently Working",
  },
  {
    title: "Fullstack Developer - Taste Of India, Lethbridge",
    year: "2019 - Present",
  },
  {
    title: "Freelancer - Bot Developer, Discord",
    year: "Present",
  },
];
export const EXPERINCE = [
  {
    title: "University Of Lethbridge",
    year: "Anticipated – April 2025",
  },
];

export const SERVICES = [
  {
    icon: <Paintbrush size={44} strokeWidth={0.8} />,
    title: "Software Development",
    description:
      "My expertise lies in both functional and object-oriented techniques with C++, unit testing, version control, and UNIX programming.",
  },
  {
    icon: <FileJson size={44} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I have a foundational understanding of website development, and I'm eager to apply my knowledge to bring your online ideas to life. While my expertise may be at a intermediate level, but i can create websites that serve your basic needs.",
  },
  {
    icon: <Layers size={44} strokeWidth={0.8} />,
    title: "Data Science & Analytics",
    description:
      "I have a strong foundation in Data Analytics and deep learning. I use Python, CNN, Keras, Shap, and the VGG13 model to achieve remarkable results.",
  },
];


// Work data
export const WORKDATA = [
  {
    title: "Indian Restaurant Website",
    url: "/newtaste.png",
    category: "frontEnd",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "https://newtasteofindia.",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Discord Profile Portfolio",
    url: "/whoisrabbit.png",
    category: "frontEnd",
    github: "https://github.com/ishworX/Portfolio",
    live : "https://whoisrabbit.com",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Restaurant Website",
    url: "/restaurant.png",
    category: "frontEnd",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "https://new-taste-of-india.vercel.app",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  
  {
    title: "Groove Music Bot",
    url: "/grooveBot.png",
    category: "backEnd",
    github: "https://github.com/theNamasteNepal/groove-bot",
    live : "https://whoisrabbit.com/projects/groove",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Indian Restaurant Website",
    url: "/newtaste.png",
    category: "fullStack",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "https://newtasteofindia.ca",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "Interview Prep APP",
    url: "/interview.png",
    category: "fullStack",
    github: "https://github.com/ishworX/Interview-Prep-App",
    live : "https://ai-interview-prep-app.vercel.app",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "SPA Website",
    url: "/spa.png",
    category: "fullStack",
    github: "https://github.com/DibsTHEgreat/spa_website/tree/test",
    live : "/",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
  {
    title: "fullStack Website",
    url: "/namasteNepal.png",
    category: "fullStack",
    github: "https://github.com/ishworX/new-taste-of-india",
    live : "http://thenamastenepal.com",
    des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
  },
];


// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Destinations",
      "Travel Guides",
      "Book Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@passport.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/linkedin.svg",
  ],
};

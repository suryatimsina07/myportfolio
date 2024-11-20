import { Paintbrush, Layers, FileJson } from "lucide-react";


export const LINKS = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "Refrences",
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
    title: "YonZon Barber & Beauty",
    year: "Currently Working",
  },
];
export const EXPERINCE = [
  {
    title: "Lethbridge Polytechnic",
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
    title: "Algorithm & Data Structures",
    description:
      "I have a strong foundation in Data Structures and Algorithms. I excel at solving complex problems using efficient algorithms, leveraging concepts such as recursion, dynamic programming, graph theory, and sorting algorithms. My expertise enables me to optimize code and build scalable solutions for real-world challenges.",
  },
];


// Work data
export const WORKDATA = [
  {
      url: "/la.png",
      title: "LA Royals Website",
      category: "FullStack",
      des: "Interactive, responsive, scalable full-stack website with intuitive user interface design.",
      github: "https://github.com/suryatimsina07/laroyals.git",
      live: "suryatimsina07.github.io/laroyals/",
  },
  {
      url: "/yz.png",
      title: "Yonzon Barber & Beauty",
      category: "Ui&Ux",
      des: "Interactive, responsive, scalable website with intuitive user interface design.",
      github: "",
      live: "https://yonzon-barbar.square.site/",
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

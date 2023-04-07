import protfolioapp from "../../Assets/Portfolio.png";
import gativanweb from "../../Assets/gativanweb.png";
import portfolio2 from "../../Assets/Portfolio2.0.png";
import mernstack from "../../Assets/DashboardSS.png";
import nexusone from "../../Assets/NexusONE.png";
import gativan from "../../Assets/Gativan.png";
import appscot from "../../Assets/AppScot.png";
import resqr from "../../Assets/Resqr.png";
import hpsak from "../../Assets/HP.png";

export const webprojects = [
  {
    title: "MERN Stack Dashboard",
    description:
      "The front-end of the dashboard is built using React.js and provides a responsive and dynamic user interface. The back-end is built using Node.js and Express, which provides a robust and scalable API for data management. The data is stored in MongoDB, a flexible and powerful NoSQL database, which provides efficient and fast data retrieval.",
    image: mernstack,
    features: [
      "Multi-page Layout Featuring Sidebar Navigation",
      "Establishing a Proprietary Database and Backend Server Configuration",
      "Mongodb setup & Database creation",
      "Ensuring responsiveness across various devices and screen sizes",
      "Switching between Dark and Light Modes",
      "Developed/Deployed from scratch",
    ],
    toolsUsed:
      "MongoDB, Express, React JS, Node Js, Material-UI, Redux Toolkit",
    githublink: "https://github.com/Veervijay38/FullStack_admin",
    livelink: "https://veer-mern-admin.onrender.com/",
  },
  {
    title: "VR",
    description:
      "This project showcases my skills in web development and design by creating a simple and elegant single-page portfolio website. The website features a clean and modern design, with a responsive layout that adapts to various screen sizes. The website includes a brief introduction, my skills and expertise, my work experience, and my educational background.",
    image: portfolio2,
    features: [
      "Developed/Deployed from scratch",
      "Website with different Color gradient",
    ],
    toolsUsed: "React JS, Tailwind , Material-UI",
    githublink: "https://github.com/Veervijay38/Portfolio_2.0",
    livelink: "https://veervijaysinh-rana-portfolio.vercel.app/",
  },
  {
    title: "Portfolio Webapp",
    description:
      "Software Developer Portfolio built with react.js bootstrap that helps you showcase your work and skills as a software developer.",
    image: protfolioapp,
    features: ["Developed/Deployed from scratch"],
    toolsUsed: "React JS, react-router-dom, Material-UI",
    githublink: "https://github.com/Veervijay38/Veer_Portfolio",
    livelink: "https://veervijaysinh-rana.vercel.app/",
  },
  {
    title: "Gativan Website",
    description:
      "From the inception of the website to its launch, I contributed to every aspect and feature of the project.",
    image: gativanweb,
    features: ["Developed from scratch", "Deployed on AWS"],
    toolsUsed: "React JS, Amazon S3, Amazon Route 53",
    livelink: "https://www.gativan.in/pune",
  },
];

export const mobileprojects = [
  {
    title: "NexusONE",
    description:
      "Elante NexusOne app is the official app of Elante Mall Chandigarh designed to bring the best shopping, entertainment and dining experience to you,The app helps you access a host of special features like the store directory, your favourite brand's list, events, offers, discounts, benefits and mall directions anytime and anyplace!",
    image: nexusone,
    features: [
      "Push Notification",
      "Store Showcase",
      "Map Functionality",
      "Deployed App on Play/App store",
    ],
    toolsUsed: "React Native, Firebase",
    playstorelink:
      "https://play.google.com/store/apps/details?id=com.nexusmalls.elantenexusone",
  },
  {
    title: "AppSCoT",
    description:
      "AppSCoT is dedicated to its members who are passionate tennis players world wide. It allows to maintain contacts and relationships among its members, and contribute to develop the community. It also manages the organisation and the course of the ASCoT Club since 1992 tennis tornaments.",
    image: appscot,
    features: [
      "Developed from scratch",
      "InstagramLogin",
      "Chatting/Calling(Twilio)",
      "Push Notification",
      "Deployed App on Play/App store",
    ],
    toolsUsed: "React Native, Firebase, Twilio, Meta, Google Cloud API",
    playstorelink:
      "https://play.google.com/store/apps/details?id=com.AppSCot92",
  },
  {
    title: "HP Saksham",
    description:
      "To create a customized one stop technology solution for partners in order to enable them to interact with each other along with complete visibility on purchase/Sales/Inventory data and more. This platform will be a holistic tool providing host of features to the partners.",
    image: hpsak,
    features: [
      "Setup Onboarding Flow",
      "Product Showcase",
      "Push Notification",
    ],
    toolsUsed: "React Native, Firebase",
    playstorelink:
      "https://play.google.com/store/apps/details?id=com.hp.saksham",
  },
  {
    title: "Gativan",
    description:
      "Gativan is a multi-brand car and bike servicing platform for vehicle owners that want hassle free, transparent and reliable service.",
    image: gativan,
    features: [
      "Developed from scratch",
      "Implemented subscription model",
      "Deployed App on Play/App store",
    ],
    toolsUsed: "React Native, GraphQL, RevenueCat, Google Cloud",
    playstorelink:
      "https://play.google.com/store/apps/details?id=com.KStudio.Gativan",
  },
  {
    title: "resQR",
    description:
      "Attach resQR to keys, computers, phones, passports, luggage, wallets credit cards sunglasses and anything valuable.",
    image: resqr,
    features: ["Implemented subscription model", "Barcode Scanner"],
    toolsUsed: "React Native",
    playstorelink: "https://play.google.com/store/apps/details?id=com.resqr",
  },
];

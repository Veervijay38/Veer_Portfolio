import emoji from "react-easy-emoji";
import codinglottie from "../../Components/lottie/programming-computer.json";
import codinglottie1 from "../../Components/lottie/cloudinfra.json";

export const skillsSection = {
  data: [
    {
      title: "Framework & Tools",
      lottieAnimationFile: codinglottie, // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Developing a cross-platform application that is responsive on both Android and iOS platforms using React Native."
        ),
        emoji(
          "⚡ Creating adaptable Single-Page-Applications (SPA) and Progressive Web Applications (PWA) with React.js, that can adjust to various screen sizes and device types."
        ),
        emoji(
          "⚡ Developing a chat application that supports real-time communication and multimedia messaging with Socket.IO and React Native."
        ),
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
        },
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "Graphql",
          fontAwesomeClassname: "logos:graphql",
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "skill-icons:androidstudio-light",
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "vscode-icons:file-type-xcode",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture & Database",
      lottieAnimationFile: codinglottie1, // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Proficient in deploying applications on AppStore and Google Play Store, ensuring compliance with respective guidelines and policies, and successfully publishing the applications for public use."
        ),
        emoji(
          "⚡ Experienced in working with multiple cloud platforms such as AWS, Azure, and Google Cloud Platform, with a solid understanding of their unique features and capabilities."
        ),
        emoji(
          "⚡ Building robust CI/CD pipelines using Github Actions for automated testing and deployment, ensuring the timely delivery of high-quality software."
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Google",
          fontAwesomeClassname: "logos:google-cloud",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Mongodb",
          fontAwesomeClassname: "skill-icons:mongodb",
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "logos:sqlite",
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
        },
        {
          skillName: "Twilio Services",
          fontAwesomeClassname: "logos:twilio-icon",
        },
        {
          skillName: "Play Store",
          fontAwesomeClassname: "ion:logo-google-playstore",
        },
        {
          skillName: "App Store",
          fontAwesomeClassname: "ion:logo-apple-appstore",
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "skill-icons:vscode-light",
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
        },
      ],
    },
  ],
};

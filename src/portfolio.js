/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jaskaran S. Luthra Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Jaskaran S. Luthra Portfolio",
    type: "website",
    url: "http://jaskaranluthra.com/",
  },
};

//Home Page
const greeting = {
  title: "Jaskaran Singh Luthra",
  logo_name: "JaskaranLuthra",
  nickname: "Jazzy",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1MdVH0FSOZ0ZnUvKrOv4GJR_-Nu9r6RGn/view?usp=share_link",
  portfolio_repository: "https://github.com/jksingh07/Portfolio",
  githubProfile: "https://github.com/jksingh07",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/jksingh07",
  // linkedin: "https://www.linkedin.com/in/jaskaran-luthra-88710b138/",
  // gmail: "jaskaranluthra99@gmail.com",
  // gitlab: "https://gitlab.com/jaskaranluthra98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/jaskaran_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/jksingh07",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jaskaran-singh-luthra-387a65171/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:jaskaranluthra99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/jaskaran_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/jaskaran.singh.5682944/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jksingh99/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos-hadoop",
          style: {
            color: "#E34F26",
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flask, Django, React Native.",
        "⚡ Creating application backend in Django & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Work Experience",
      fileName: "DesignImg",
      skills: [
        "⚡ As a Business Intelligence Developer Co-op at Ericsson, Ottawa, I deploy and test ETL packages, ensuring 99.5% accuracy in data migration. I optimize processing time by 15% through implementing Triggers and Stored Procedures using PL/SQL for incremental loading. Proficient in C#, Python, and SQL, I design complex SSIS packages, write T-SQL queries, and utilize advanced SQL techniques for improved data analysis. Additionally, I spearhead a machine learning project achieving 90% accuracy in classifying customer names using deep learning, NLP, and word vectorization.",
        "⚡ At Wipro Limited in Bengaluru, India, I was Associate Consultant and Project Engineer utilized technologies such as Python, MySQL, NLP, Matplotlib, SAP BASIS, SAP Analytics, and SAP iRPA to develop a Resume Parser and Skill-Bridge framework, as well as automate repetitive tasks for the Human Resource Team, leading to a 40% reduction in hiring time and a 50% reduction in workload",
        "⚡ As a Machine Learning Intern at Perspectico in New Delhi, India, I applied various technologies such as Python, Machine Learning, Computer Vision, NLP, APIs, Flask, and AWS, led a team of five members, fetched 90% of data by web scraping multiple job sourcing platforms, and developed a recommendation system that suggests 70% matching jobs.",
        "⚡ During my internship at AutoMotu, from April 2019 to December 2019 in New Delhi, I utilized technologies such as Python, Machine Learning, Data Analysis and Wrangling, Time Series Forecasting, APIs, and Flask, to analyze driver behavior using mobile phone sensors, achieving an 86% testing accuracy rate with the resulting ML model, and collaborated with PHDs in Data Science from the USA and professors from a top elite university in India while also designing and implementing a pre-processing pipeline to optimize the data ingestion process for the project.",
      ],
      softwareSkills: [
        {
          skillName: "Open CV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#FFD700,",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#00FF00",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/jaskaranluthra99/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/jaskaran07",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/jaskaran_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@jaskaran391",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Windsor",
      subtitle:
        "Masters in Applied Computing (Specialisation Artificial Intelligence)",
      logo_path: "uwindsor_logo_2.jpeg",
      alt_name: "University of Windsor",
      duration: "2022 - Current",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Reinforcement Learning, Clustering, Ensemble Learning, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also participated in various workshops. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ Distinguished myself in Advanced Software Engineering by achieving a perfect score of 100% among a cohort of 160 students.",
      ],
      website_link: "https://www.uwindsor.ca",
    },
    {
      title: "Galgotias College of Engineering and Technology",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "galgotia_logo_2.jpeg",
      alt_name: "GCET Greater Noida",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Secured 1st rank among 500 members in a Time Attack coding competition at Technical Fest",
        "⚡ Secured 3rd rank among 200 entries in a Infotra Metacognition Hackathon",
      ],
      website_link: "https://galgotiacollege.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1TlqecAs3IlhaehaIL3JG2xCgXTc8FhSV/view",
      alt_name: "Microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/M9FAG663PH3L",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Technology Training with Prjects: Python Programming",
      subtitle: "- Tata Consultancy Services (TCS iON)",
      logo_path: "tcs.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1uezht0TOA18rMCl1C4OVB4asyIEtHEfG/view",
      alt_name: "TCS",
      color_code: "#0C9D5899",
    },
    {
      title: "Learning Hadoop",
      subtitle: "- Lynn Langit",
      logo_path: "linkedin_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1vlraciXLd4q0x2TCf408o7--294PXtsc/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Getting Started with AWS Machine Learning",
      subtitle: "- Blaine Sundrud",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/MLMRKCR9B2LD",
      alt_name: "Amazon Web Services",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine Learning A-Z: AI,Python and R",
      subtitle: "- Kirill Eremenko, Hadelin de Ponteves (Super Data Science)",
      logo_path: "superds2.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1xyhPK-N_GacCXxmJW6K2yHamZayg-LfY/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },

    {
      title: "Facial Expression Recognition with Keras",
      subtitle: "- Snehan Kekre",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/C2FVU69PG3DV",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Software Design: Requirement to Release",
      subtitle: "- Neelam Dwivedi",
      logo_path: "linkedin_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1KOJcb0l2qbkEKMS0ZTe2Zo87uiTjpiJT/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#2A73CC",
    },
    {
      title: "Building Interactive Dashboards using Python",
      subtitle: "- Snehan Kekre",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XGV7HN48GD8X",
      alt_name: "Coursera",
      color_code: "#4285F499",
    },
    {
      title: "Apache PySpark",
      subtitle: "- Jonathan Fernandes",
      logo_path: "linkedin_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1vf5FujHKjfubOrwA8fAsPBfoWTFhQ0J5/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#0C9D5899",
    },

    {
      title: "Sentiment Analysis with Deep Learning using BERT",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RTXGDNYH8YTF_",
      alt_name: "Coursera",
      color_code: "#FFBB0099",
    },
    {
      title: "Learning Hadoop",
      subtitle: "- Justin Jenkins",
      logo_path: "linkedin_logo.jpeg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RTXGDNYH8YTF",
      alt_name: "LinkedIn Learning",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and well established companies mostly as Software Developer, ML/AI Developer and Business Intelligence Developer. I love organising events and that is why I am also involved with many NGOs communities as a volunteer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Business Intelligence Developer Co-op",
          company: "Ericsson Canada",
          company_url: "https://www.ericsson.com/en",
          logo_path: "ericsson_logo.png",
          duration: "Sep 2023 - Present",
          location: "Ottawa, Canada",
          description:
            "As a Business Intelligence Developer Co-op at Ericsson in Ottawa, Canada, my role involves a diverse technological stack, including C#, Python, SSIS, ETL, MS SQL Server Suite, T-SQL, PL/SQL, and advanced SQL techniques such as Window Functions, CTEs, and Joins, alongside proficiency in NLP, Git, and Jira. I have successfully deployed and tested over 15 ETL packages on production servers, ensuring an exceptional accuracy rate of 99.5% in data migration and processing. Additionally, I've implemented Triggers and Stored Procedures using PL/SQL to facilitate incremental loading, significantly reducing processing time by 15%. My expertise extends to designing and developing complex SSIS packages with C# scripts for seamless data movement from diverse sources like SharePoint, Jira, APIs, Text Files, and Excel to SQL Server. Proficient in crafting T-SQL queries, dynamic queries, and complex joins, I've orchestrated routine SQL Server Agent jobs, developed business logic for table creation, and executed advanced SQL techniques for more accurate data analysis and reporting. Notably, I've spearheaded a machine learning project achieving a 90% accuracy rate in classifying customer names, leveraging Deep Learning, Natural Language Processing, and Word Vectorization techniques.",
          color: "#0879bf",
        },
        {
          title: "Associate Consultant and Project Engineer",
          company: "Wipro Technologies",
          company_url: "https://www.wipro.com/",
          logo_path: "Wipro.png",
          duration: "Aug 2021 - Aug 2022",
          location: "Bengaluru, Karnataka",
          description:
            "As a professional with a strong technical background, I have extensive experience with a variety of technologies, including Python, MySQL, NLP, Matplotlib, SAP BASIS, SAP Analytics, and SAP iRPA. Throughout my career, I have designed and developed frameworks aimed at improving the efficiency of application tracking systems, including a Resume Parser. Additionally, I have made significant contributions to the development of Skill-Bridge and other applications that have enhanced technical and functional skills across diverse employee groups.\nOne of my most significant accomplishments has been automating repetitive tasks for the Human Resource Team using SAP iRPA. This automation reduced hiring time by 40% and workload by 50%, while also creating intuitive dashboards that made it easy to track progress and performance metrics. I am proud of my ability to use my technical expertise to create solutions that drive tangible improvements in efficiency and productivity.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Business Intelligence Developer Co-op",
          company: "Ericsson Canada",
          company_url: "https://www.ericsson.com/en",
          logo_path: "ericsson_logo.png",
          duration: "Sep 2023 - Present",
          location: "Ottawa, Canada",
          description:
            "Business Intelligence Developer Co-op at Ericsson, Ottawa, adept in C#, Python, SSIS, ETL, and SQL. Successfully deployed and tested 15+ ETL packages with 99.5% accuracy. Implemented PL/SQL Triggers and Stored Procedures for incremental loading, reducing processing time by 15%. Proficient in designing complex SSIS packages, writing T-SQL queries, and executing advanced SQL techniques. Spearheaded a machine learning project achieving 90% accuracy in classifying customer names using DL, NLP, and Word Vectorization.",
          color: "#0879bf",
        },
        {
          title: "Scripting Developer Intern",
          company: "Expoodle Pvt. Ltd.",
          company_url: "https://expoodle.com",
          logo_path: "expoodle-logo.png",
          duration: "Jul 2021 - Aug 2021",
          location: "Noida, Uttar Pardesh",
          description:
            "In my work with AR/VR, I have become skilled in the fundamentals of building AR applications using Unity and three.js. A key project I worked on involved creating a Try-On Jacket application using three.js and Pose Estimator libraries that employ machine learning to detect and identify the features and movements of various body parts, including the face, hands, arms, and legs. My internship has provided me with valuable insights into the intersection of AR/VR and artificial intelligence, expanding my knowledge and abilities in these exciting fields.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Intern",
          company: "Perspectico (now Suitable)",
          company_url: "https://suitable.ai",
          logo_path: "perspectico_logo.avif",
          duration: "May 2022 - Aug 2022",
          location: "New Delhi, India",
          description:
            "As a machine learning intern, I have been involved in several projects that required me to leverage my skills and knowledge in this field. To obtain relevant data for these projects, I performed web scraping of multiple job sourcing platforms, which was followed by the development of a recommendation system based on this data. Apart from this, I have also contributed to projects such as the Resume Matcher, as well as sound and video analysis. To ensure scalability and efficiency of the solutions, I utilized Flask to develop APIs and deployed them on Amazon EC2 instances. My tech stack for these projects includes Python, Machine Learning, Computer Vision, NLP, APIs, Flask, and AWS.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "What After College (WAC)",
          company_url: "https://whataftercollege.com",
          logo_path: "WAC.jpeg",
          duration: "Jun 2020 - Jul 2020",
          location: "New Delhi, India",
          description:
            "During my internship, I had the opportunity to work on a Sentiment Analysis of Tweets project where I gathered data from Twitter and analyzed it using NLP techniques. This experience allowed me to develop strong skills in NLTK, Spacy, Pandas, and Numpy. I successfully applied these skills to complete the project and gained valuable insights into data analysis, NLP, and social media analytics.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Intern",
          company: "AutoMotu Driving Analytics Solution Pvt. Ltd",
          company_url:
            "https://drive.google.com/file/d/1xcJyRKBGSqQNLuTyRt0Ec8Hpfa7w9xiQ/view",
          logo_path: "automotu.jpeg",
          duration: "Apr 2019 - Dec 2019",
          location: "New Delhi, India",
          description:
            "As part of my professional portfolio, I am proud to highlight my experience in analyzing driver behavior using mobile phone sensors. During this project, I collected data and meticulously prepared datasets for model training. To optimize the data ingestion process, I designed and implemented a pre-processing pipeline that facilitated the feeding of machine learning models. By leveraging various ML algorithms, I achieved a testing accuracy rate of 86% with the resulting model.",
          color: "#0071C5",
        },
        {
          title: "Python Developer Intern",
          company: "Akatva",
          company_url:
            "https://drive.google.com/file/d/1WUvqay0iWKEiSaB0RAvks6DFf7Ux34Qp/view",
          logo_path: "akatva.jpeg",
          duration: "Jun 2018 - Jul 2018",
          location: "New Delhi, India",
          description:
            "During my internship, I gained practical experience in utilizing Machine Learning algorithms for the purpose of detecting and recognizing facial expressions. Specifically, I worked on developing and implementing advanced algorithms aimed at improving the accuracy of these systems. This involved a deep understanding of various Machine Learning techniques, as well as proficiency in programming languages such as Python and R. Through this experience, I was able to gain a comprehensive understanding of the application of Machine Learning in real-world scenarios, and I am excited to continue expanding my knowledge and expertise in this field.",
          color: "#0071C5",
        },
        {
          title: "Cloud Engineer Intern",
          company: "Verzeo Tech Pvt. Ltd",
          company_url:
            "https://drive.google.com/file/d/1JfwSpyvBlwibVwqbD14kvITwkZOzM0wR/view",
          logo_path: "verzeo.jpeg",
          duration: "Jun 2018 - Jul 2018",
          location: "New Delhi, India",
          description:
            "I am pleased to provide this certificate of completion for my 45-day internship with Verzeo during June-July 2018, where I focused primarily on Azure Cloud Computing. Throughout my internship, I demonstrated dedication, hard work, and a willingness to learn and be inquisitive, as evidenced by my successful completion of the program. Specifically, I gained valuable knowledge and experience with Azure cloud fundamentals, which has been an asset to my academic and professional pursuits. I would like to express my sincere appreciation to Verzeo for providing me with this opportunity to enhance my skills and knowledge in this field.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title:
            "Joint Secreatory Fusion IT Club- Dance Club Head of IT Department",
          company:
            "Fusion IT CLub of Galgotia College of Engineering and Technology",
          company_url: "https://www.facebook.com/fusionitgcet/",
          logo_path: "fusion.jpeg",
          duration: "May 2019 - May 2020",
          location: "Greater Noida, Uttar Pardesh",
          description:
            "Coached dance group as Group Leader and organized main stage plays and dance performances of department fest with a gathering of more than 1000 members",
          color: "#4285F4",
        },
        {
          title: "Student Volunteer",
          company: "IEEE",
          company_url: "https://www.ieee.org",
          logo_path: "ieee.jpeg",
          duration: "Sep 2018 - Oct 2018",
          location: "Greater Noida, Uttar Pardesh",
          description:
            "Volunteered in organizing IEEE international conference 2018 Managed activities like Registration, Handling Stage and gathering of 500+",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "PROJECTS",
//   description:
//     "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
//   avatar_image_path: "projects_image.svg",
// };
// const publicationsHeader = {
//   title: "PUBLICATIONS",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Change Data Capture (CDC)",
//       createdAt: "2023-03-06T16:26:54Z",
//       description: "Implemented change data capture system using Python, Apache Spark, MySQL, AWS (LAMBDA GLUE, S3, DMS, RDS, IAM) for ongoing replication of database changes to another storage with a detailed architecture for data flow, transformation, and storage to ensure scalability, flexibility, and robustness. ",
//       url:
//         "https://github.com/jksingh07/CDC",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Automated Garage System",
//       createdAt: "2022-12-06T16:26:54Z",
//       description: "allows remote control and monitoring of garage doors, sensors, and lights using Python, Flask APIs, Unity, Junit, GIT, Jira, Flutter, GO Visual Studio, and Azure Cloud. We achieved a 90% reduction in user effort and an 80% increase in efficiency. ",
//       url:
//         "https://github.com/jksingh07/smart_garage",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Object Detection and Recognition",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Applied Technologies: Deep Learning, Raspberry Pi, GUI - Tkinter, API, Flask\n • Developed assistive technology for the visually impaired, utilizing text-to-speech module to accurately detect and recognize objects with 95% model accuracy.",
//       url:
//         "https://github.com/jksingh07/Object-Detection",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Garbage Detection",
//       createdAt: "2019-12-06T16:26:54Z",
//       description: "Detects Garbage in the streets and reports to Municipal corporation. ",
//       url:
//         "https://github.com/jksingh07/Garbage-Detection",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Restaurant Management System",
//       createdAt: "2020-10-06T16:26:54Z",
//       description: "This project streamlines the billing process by providing two graphical user interfaces (GUIs): one for customers to place orders and obtain order IDs, and another for employees to input order IDs and perform updates or deletions with admin permissions, while utilizing SQL lite for database management. ",
//       url:
//         "https://github.com/jksingh07/Restaurant-Management-System/tree/master",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "File Transfer Tool using Sockets",
//       createdAt: "2020-10-06T16:26:54Z",
//       description: "A basic File transfer tool built using socket programming in python. It can transfer any type of files (videos, images, documents) between 2 computers connected on the same wireless network.",
//       url:
//         "https://github.com/jksingh07/File-Transfer-tool/tree/master",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Self Driving Car Prototype",
//       createdAt: "2020-12-06T16:26:54Z",
//       description: "In this project we had used Behaviour cloning technique and trained a neural network with the images from the car (working in a simulator) of front , left, right side and then processed the images by cleaning the data by removing unwanted part of image, fine tuned and resized the images. On the basis of the images it predicts the left and right turns. Moreover to stop the car we used Lidar sensors that will detect the object in the path. We had created a working Prototype of this car. Raspberry Pi module is used to run the application and work with Lidar, a battery pack is installed in the car ",
//       url:
//         "https://github.com/jksingh07/Self-Driving-Car-",
//     },

//   ],

// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jaskaran_animated.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack AI Application/Services Devlopment, inclusive of ML, AI, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "About Me",
    subtitle:
      "Hello! I am Jaskaran Singh Luthra, a passionate data scientist and machine learning enthusiast. I have a solid background in programming languages such as Python, C, C++, and JavaScript and have gained extensive experience in data science and machine learning technologies such as TensorFlow, PyTorch, Big Data, OpenCV, NLP, and deep learning techniques like LSTM, neural networks, data visualization, data mining, and data privacy.\n\nI hold a Master of Applied Computing in Artificial Intelligence stream from the University of Windsor, where I excelled in Advanced Software Engineering and achieved a perfect score of 100% among 160 students. Additionally, I earned a Bachelor of Technology in Information Technology from Galgotias College of Engineering and Technology, where I secured the first rank among 500 members in Time Attack coding competition during Technical Fest.\n In my professional experience, I have worked with a wide range of databases, including MySQL, MongoDB, PostgreSQL, MS-SQL, and AWS-S3. Moreover, I have expertise in visualization tools like Tableau, PowerBI, Matplotlib, Seaborn, Plotly, and Panel, and frameworks such as Apache Spark, Hadoop, Django, Flask, Streamlit, Dash, REST API, Docker, Anaconda, and Jupyter NB.",
    link: "https://blogs.jaskaranluthra.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "532 Oak Street, Windsor, Ontario, Canada, N9A 5E6",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/532+Oak+St,+Windsor,+ON+N9A+5E6/@42.3112089,-83.0508123,17z/data=!3m1!4b1!4m6!3m5!1s0x883b2d10272198d9:0x69852e68c8a067e9!8m2!3d42.311205!4d-83.0486183!16s%2Fg%2F11cphdk2lc",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};

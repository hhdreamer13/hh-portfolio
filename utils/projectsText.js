export const projects = [
  {
    id: 1,
    employer: "Tant Mieux Production",
    stack: "Next.js 13, React, Sanity, MapBox GL",
    description: [
      "Developed an interactive platform for the Tobie Lolness series (set to be aired on France Télévisions), using exclusive assets in collaboration with key stakeholders.",
      "Crafted unique map styles with Mapbox; integrated multiple APIs, including MapboxGL, Sanity for CMS, Resend for mailing services and Firebase. Utilized advanced features of Next.js 13, such as intercepting routes, caching, and revalidating.",
      "Implemented an intuitive and interactive menu that effectively categorizes and showcases distinct content areas, facilitating seamless navigation tailored for the target audience.",
      `Orchestrated a multi-faceted storytelling experience, combining text, imagery, and voice-over. This narrative journey, comprising seven scenes, presented a poetic tale that immersed users in the world of "Tobie Lolness", ensuring an engaging and cohesive narrative flow throughout.`,
    ],
    links: [
      {
        name: "Les Amis de Tobie",
        link: "https://lesamisdetobie.fr",
      },
    ],
  },
  {
    id: 2,
    employer: "IPAG de Paris (Panthéon Assas)",
    stack: "Python, React, Next.js",
    description: [
      "Recruited as a contracted administrative staff member to manage remote courses, I had the opportunity to develop key software solutions at IPAG de Paris.",
      "Developed an initial Python-based automation tool to convert Excel to Moodle XML for MCQ quizzes integration, revolutionizing the daily workflows for faculty by reducing manual entry time from up to an hour to mere seconds. Later scaled this success by transforming the tool into an online service built with Flask API and Next.js, empowering faculty and students to independently create and take quizzes.",
      "Engineered a Next.js-based form-driven application for professor recruitment that streamlined the entire process. The application features data validation, digital signatures, PDF generation, and MongoDB integration, drastically reducing paperwork and potential for errors.",
    ],
    links: [
      {
        name: "IPAG Recruitment Form",
        link: "https://ipag-formulaire.vercel.app/",
      },
      {
        name: "MCQ Converter",
        link: "https://excel-moodle.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    employer: "Sorbonne Nouvelle",
    stack: "Python, D3.js, React",
    description: [
      "Conducted extensive research and analysis of the short animation series “En sortant de l'école” culminating in a data visualization project.",
      "Leveraged D3.js for precise control over visual elements, alongside React and Vite for a responsive, high-performance web application.",
      "Utilized Python for extracting film color palettes and data analysis, coupled with ObservableHQ for ideation, resulting in innovative visualizations of animation techniques and thematic connections.",
      "Crafted compelling visual metaphors, including urban landscapes, galaxies, and flowers, symbolizing episodes, techniques, and creativity, offering a poetic and immersive exploration experience.",
    ],
    links: [
      {
        name: "PoAnimaViz",
        link: "https://poanimaviz.art/",
      },
    ],
  },
  {
    id: 4,
    employer: "Crous de Paris",
    stack: "Node.js, React, Vite, Sanity",
    description: [
      "As a student support agent, I was responsible for handling and responding to a variety of student applications. I took the initiative to develop a chatbot using Node.js and the Telegram API on Heroku to streamline the workflow of the entire service.",
      "The tool garnered interest from the entire decision-making chain and was presented to the Director of Crous de Paris as well as to sub-directors responsible for digital services and student life at Cnous, with consideration for national deployment.",
      "Engineered the app version with React and Sanity, optimized via react-query caching.",
    ],
    links: [
      {
        name: "Crous Assistant",
        link: "https://crous-assistant.info/",
      },
      {
        name: "Crous Telegram Bot",
        link: "https://t.me/crous_assistantBot",
      },
    ],
  },
  {
    id: 5,
    employer: "Freelance",
    stack: "Adobe Creative Suite, HTML, CSS, WordPress, React",
    description: [
      "Developed websites across multiple sectors, such as theater, hotels, and academia, using a range of technologies from WordPress and basic HTML/CSS to React.",
      "Utilized Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere, Audition), Cinema 4D and Blender for web design, motion design, and editing, including editing a Pictures of the Year International (POYi) award-winning short film.",
    ],
    links: [
      {
        name: "Phd Student Portfolio",
        link: "https://ayoobsalari.com/",
      },
      {
        name: "Some Motion Graphics",
        link: "https://vimeo.com/nimportequi",
      },
    ],
  },
];

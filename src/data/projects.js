export const projects = [
  {
    title: "Cue-iT",
    contributions: [
      "Led modernization of Cue-iT, improving reliability and maintainability across platforms",
      "Redesigned and optimized text editor functionality, including a robust custom undo/redo system",
      "Modernized frontend by transitioning from HTML/jQuery/CSS to Vue with Pinia state management",
      "Built automated unit and integration tests with Vitest, improving long-term reliability",
      "Developed CueTALK Cloud on Azure, enabling hardware to connect seamlessly from anywhere",
      "Resolved critical off-screen text rendering issues, increasing broadcaster confidence in live environments",
      "Optimized data transfer for large scripts, eliminating jitter in prompter output and improving live performance reliability",
    ],
    link: "https://www.cuescript.tv/cueiT-software.php",
    image: `${import.meta.env.BASE_URL}images/cueit-screenshot.png`,
    technologies: ["JavaScript", "Electron", "Vue", "Pinia", "Vitest", "Azure"],
  },
  {
    title: "Say-iT",
    contributions: [
      "Designed and developed Say-iT, a voice-activated teleprompting application that eliminated the need for an operator",
      "Connected voice engine with Cue-iT, providing precise scroll automation from live audio input",
      "Say-iT became one of CueScript’s top-selling software products, driving adoption in broadcast environments",
    ],
    link: "https://www.cuescript.tv/product-profile.php?pid=SayiT",
    image: `${import.meta.env.BASE_URL}images/sayit-screenshot.png`,
    technologies: ["NW.js", "JavaScript", "HTML / CSS / JQuery"],
  },
    {
    title: "Repository Tracker",
    contributions: [
      "A web application to track GitHub repositories and pull their latest release information",
      "Built backend and frontend to work seamlessly together using React, TypeScript, Octokit, and GraphQL",
      "Fully tested with Jest"
    ],
    link: "https://github.com/augerT/repository-tracker",
    image: `${import.meta.env.BASE_URL}images/repository-tracker-screenshot.png`,
    technologies: ["React", "TypeScript", "Octokit", "GraphQL", "Jest"],
  },
  {
    title: "Portfolio Website",
    contributions: [
      "Designed and developed a modern, responsive portfolio website",
      "Created smooth scrolling navigation with dynamic highlighting",
      "Built reusable React components for maintainable code",
      "Optimized performance with Tailwind",
    ],
    link: "https://github.com/augerT/portfolio",
    image: `${import.meta.env.BASE_URL}images/portfolio-screenshot.png`,
    technologies: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Tic-Tac-Toe",
    contributions: [
      "The React tutorial with some added capabilities",
      "Added display text instead of button on current move",
      "Added toggle button to sort the moves in ascending or descending order",
      "Added feedback to show when a player wins",
      "Added location for each move in the move history list",
    ],
    link: "https://github.com/augerT/tic-tac-toe-react",
    image: `${import.meta.env.BASE_URL}images/tictactoe-screenshot.png`,
    technologies: ["React", "Tailwind"],
  },
  {
    title: "Battleship",
    contributions: [
      "Battleship in React!",
      "Setup two different 10x10 boards for player board and enemy board (cpu AI controlled)",
      "Setup different game states for ship placement, player turn, enemy turn, and game over",
      "Crafted cpu AI to shoot randomly, and added logic to finish destroying ships when a hit is found",
      "Added cheat button for convenience in finishing the game faster",
    ],
    link: "https://github.com/augerT/battleship-react",
    image: `${import.meta.env.BASE_URL}images/battleship-screenshot.png`,
    technologies: ["React", "Tailwind"],
  },
];

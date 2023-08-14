import six from "./images/6.png";
import blackjack from "./images/Blackjack.png";
import boardGameReviews from "./images/BoardGameReviews.png";
import pendulum from "./images/PendulumImage.jpg";
import pokeguessr from "./images/Blackjack.png";
import pythonMandelbrot from "./images/PythonMandelbrot.png";
import TicTacToe from "./images/TicTacToe.png";

export default [
  {
    name: "NC Games - Frontend",
    image_url: boardGameReviews,
    video_url: "",
    github: "https://github.com/JoshS1234/nc-games",
    hosted: "https://sunny-narwhal-f4e1dd.netlify.app/",
    language: "Javascript",
    tech: "React",
    description:
      "This is the frontend for a (mock) board games review site, it was made using React and uses the 'NC Games - Backend' project to provide the data to populate the site. Users can also upvote and post comments",
    year: 2022,
  },
  {
    name: "NC Games - Backend",
    image_url: "",
    video_url: "",
    github: "https://github.com/JoshS1234/be-nc-games",
    hosted: "https://my-backend-server-josh.herokuapp.com/",
    language: "Javascript",
    tech: "Express",
    description:
      "This is the backend for a (mock) board games review site, it was made using express. It was made as part of the Northcoders bootcamp, during week 7 of the course",
    year: 2022,
  },
  {
    name: "Pokeguessr",
    image_url: pokeguessr,
    video_url: "",
    github: "https://github.com/JoshS1234/Pokemon-Guessing-Game",
    hosted: "https://candid-pasca-16abe5.netlify.app/",
    language: "Javascript",
    tech: "React",
    description:
      "This is a react webpage I created as a pokemon guessing game, it uses a pokemon data API (https://pokeapi.co/) to get images, and the user can filter by generation",
    year: 2022,
  },
  {
    name: "Snap App",
    image_url: "",
    video_url: "g47hsMFTKLA",
    github: "https://github.com/JoshS1234/MyUpdatedSnap",
    hosted: "",
    language: "Javascript",
    tech: "Firebase, React-native",
    description:
      "This is an app which I made as a group project at Northcoders. It recreates the functionality of a disposable camera by not showing the user the photo until they have completed a 'film', when they have completed the film they get all of the photos at once, in a photo album format.",
    year: 2022,
  },
  {
    name: "Vicsek model of bird flocking",
    image_url: "",
    video_url: "kT1rA1vLfCs",
    github: "",
    hosted: "",
    language: "MATLAB",
    tech: "",
    description:
      "This attempts to simulate animal flocking patterns using a time step method and a simple set of flocking rules (outlined in a paper by Vicsek)",
    year: 2020,
  },
  {
    name: "Mandelbrot fractal pattern - Changing power",
    image_url: "",
    video_url: "sp-zj7p8zPE",
    github: "https://github.com/JoshS1234/MATLAB-Fractals-More-Complex",
    hosted: "",
    language: "MATLAB",
    tech: "",
    description:
      "This generates a fractal pattern based on the Mandelbrot fractal, and replots for various different indices, it then uses these images to generate a video showing how the power affects the fractal",
    year: 2020,
  },
  {
    name: "2D pendulum motion",
    image_url: pendulum,
    video_url: "thhOujbmXdA",
    github: "https://github.com/JoshS1234/pendulums-with-python",
    hosted: "",
    language: "MATLAB",
    tech: "",
    description:
      "This uses Euler's method of solving differential equations to show the movement of a pendulum in 2D",
    year: 2020,
  },
  {
    name: "Mandelbrot fractal",
    image_url: pythonMandelbrot,
    video_url: "",
    github: "https://github.com/JoshS1234/fractals-in-python",
    hosted: "",
    language: "Python",
    tech: "",
    description: "This is a mathematical model which creates a fractal pattern",
    year: 2021,
  },
  {
    name: "Handwriting recognition - Neural network",
    image_url: six,
    video_url: "",
    github: "https://github.com/JoshS1234/MNIST-number-recognition/tree/main",
    hosted: "",
    language: "Python",
    tech: "",
    description:
      "This uses a neural network (trained on the MNIST dataset) in order to recognise handwritten numbers. It is coded from scratch, and doesn't use machine learning software packages.",
    year: 2020,
  },
  {
    name: "ASCII Tic Tac Toe (Noughts and crosses)",
    image_url: TicTacToe,
    video_url: "",
    github: "https://github.com/JoshS1234/TicTacToeAscii",
    hosted: "",
    language: "Python",
    tech: "",
    description:
      "This is a game of noughts and crosses in the command line. It was completed as a project during an online Python fundamentals course (over the first lockdown).",
    year: 2020,
  },
  {
    name: "Blackjack",
    image_url: blackjack,
    video_url: "",
    github: "https://github.com/JoshS1234/blackjackAscii",
    hosted: "",
    language: "Python",
    tech: "",
    description:
      "This was completed as a project during an online Python fundamentals course (over the first lockdown). It attempts to simulate a game of blackjack (entirely in the command line)",
    year: 2020,
  },
];

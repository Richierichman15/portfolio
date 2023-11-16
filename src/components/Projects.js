import React from 'react';
import dream from './pics/Dream-Cars-2.png';
import recipe from './pics/chef.png'
import fitness from './pics/pump.png'

const Projects = ()=> {


const projectData = [
  {
      name: "Dream Cars",
      description: "This was a group project with 3 other members involved. We divided the work in sections of what needed to be done. The project is a ecommerce for finding your dream car. Challenges we faced was finding the right api with our project. First API wouldn't respond with our database. End up using backend mockdata to use for our page.",
      imageUrl: dream,
      projectUrl: "https://github.com/Debug-Thugs-2211/Dream-cars"
  },
  {
      name: "Recipe Finder",
      description: "Using Openai API to find a recipe.",
      imageUrl: recipe,
      projectUrl: "https://dev.softwaredistrict.tech/recipe-wizard/",
  },
  {
      name: "Fitness Tracker",
      description: "This project leveraged a tech stack comprising Node.js, Express, and React to create a comprehensive fitness tracker application. Node.js and Express formed the backend, enabling data storage and user authentication, while React powered the dynamic and responsive front-end interface. The result was a user-friendly fitness tracker allowing users to log workouts, track progress, and set fitness goals seamlessly. ",
      imageUrl: fitness,
      projectUrl: "https://github.com/Richierichman15/Fitness-Tracker",

  }
];

return (
    <div className="container mx-autp w-vh h-vh p-4 bg-white text-black font-sans">
      <h1 className="text-2xl font-semibold mb-4 text-center flex justify-center">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-15 h-20 gap-4 text-center">
        
        {projectData.map((project, index) => (
          <div key={index} className=" text-black rounded shadow p-4 ">

            <img src={project.imageUrl} alt={project.name} className="mb-2 w-20 h-22 flex items-center justify-center  " />

            <h2 className="text-lg mb-2 font-bold">{project.name}</h2>

            <p className="text-black font-light">{project.description}</p>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Projects;
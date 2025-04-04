# Assignment 3 Documentation #

# Project Overview: 

- Description: 
    Create a static site using 11ty (Eleventy) static site generator. The content for projects and bookstore is fetched from STRAPI and it generates an output site in the _site folder. The content is enhanced with dynamic weather data fetched from the OpenWeather API using a serverless function deployed via netlify. The site is integrated with netlify for local development. 
    As stated in my Lab 3, I had intended to create a next.js project using React components but due to time constraints, I had to stick to my eleventy project and implement a serverless function to fetch the current weather for Toronto. 

- Technologies used:
               - 11ty (Eleventy): Static site generator 
               - Node.js and npm: Dependency management 
               - Axios 
               - Strapi 
               - Netlify: Hosting platform with support for serverless functions 
               - OpenWeather API: Source of dynamic weather data 
# Installation and Setup 
- Prerequisites 
               - Node.js: Ensure it is installed (version 12 or higher)
               - npm: Required for managing dependencies
               - Netlify CLI: For local development 
                                            (npm install -g netlify-cli)
- Installation Steps:
               - Unzip the downloaded folder 
               - Install the dependencies "npm install"

- Running the project: 
               - To build and serve the project locally:
                            -  netlify dev
               - This command will build the site and serve it at "http://localhost:8888"
               - Dynamic features like weather data are available through Netlify's local serverless function emulation. 

# Project Structure
- .eleventy.js: Config file for 11ty, specifies settings for content processing 
- index.md: The main content file for the homepage 
- node_modules: Contains all project dependencies 
- package.json: Defines project scripts and dependencies 
- src: Contains source files for the site, such as assests, the layout, the data files, and the pages. 
- _site: The output directory containing generated site files (after build)
- netlify/functions/fetch_weather.js: Serverless function for fetching Toronto's weather data using the OpenWeather API.
- netlify.toml: Configuration file for Netlify, defining build settings and serverless function directory

# Usage Instructions
- Edit Content: To edit any of the content you can go to the src folder and edit the markdown files in the appropriate folder

# Issues and Limitations:
- The site may not automatically update when files are changed unless using the npm start option
- Compatibility tested only in local development
- The site relies on the OpenWeather API, which requires an active internet connection and a valid API key
- Any changes to the weather function require restarting the Netlify development server.
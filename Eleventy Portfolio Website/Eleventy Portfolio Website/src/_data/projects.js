require('dotenv').config(); // Load environment variables
const axios = require('axios');

const STRAPI_URL = process.env.STRAPI_PROJECTS_API_URL;

module.exports = async function () {
    try {
        // Fetch projects with media populated
        const res = await axios.get(`${STRAPI_URL}?populate=*`);
        console.log("Projects data fetched from Strapi:", res.data);
        return res.data.data;
    } catch (error) {
        console.error("Error in fetching projects:", error);
    }
};

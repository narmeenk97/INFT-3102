require('dotenv').config();
const axios = require('axios');

const STRAPI_URL = process.env.STRAPI_API_URL;

module.exports = async function () {
    try {
        const res = await axios.get(`${STRAPI_URL}?populate=Image`);
        console.log("Books data fetched from Strapi:", res.data);
        return res.data.data; 
    } catch (error) {
        console.error("Error in fetching books:", error);
    }
};

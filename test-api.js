require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

async function testApiKey() {
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        
        const response = await openai.listEngines();
        console.log("API key is valid!");
        return true;
    } catch (error) {
        console.error("API key verification failed:");
        if (error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
        return false;
    }
}

testApiKey();

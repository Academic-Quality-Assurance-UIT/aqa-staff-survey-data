import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
	apiUrl: process.env.API_URL,
	apiToken: process.env.API_TOKEN,
};

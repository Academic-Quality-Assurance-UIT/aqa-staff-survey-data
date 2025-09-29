import axios from "axios";
import https from "https";
import { CONFIG } from "./get-config.js";

const apiInstance = axios.create({
	baseURL: CONFIG.apiUrl,
	timeout: 10000,
	httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`
    },
});

export default apiInstance;

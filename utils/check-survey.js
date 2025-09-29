import { CONFIG } from "./get-config.js";
import apiInstance from "./api-instance.js";

export async function checkSurveyExists(surveyId) {
	try {
		const response = await apiInstance.get(CONFIG.apiUrl, {
			params: {
				action: "getSurveyDetail",
				page: 1,
				limit: 1,
				sid: surveyId,
			},
		});

		return !!response.data;
	} catch (error) {
		return false;
	}
}

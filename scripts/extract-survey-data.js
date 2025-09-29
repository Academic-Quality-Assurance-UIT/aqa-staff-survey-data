import surveyList from "../constants/survey-list.js";
import { checkSurveyExists } from "../utils/check-survey.js";

for (const survey of surveyList) {
	const { id: surveyId, year } = survey;
	const isExists = await checkSurveyExists(surveyId);

	if (!isExists) {
		console.warn(`Survey ID ${surveyId} for year ${year} does not exist.`);
		continue;
	} else {
		console.log(`Survey ID ${surveyId} for year ${year} exists.`);
	}
}

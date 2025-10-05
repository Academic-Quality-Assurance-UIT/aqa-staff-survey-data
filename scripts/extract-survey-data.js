import surveyList from "../constants/survey-list.js";
import { checkSurveyExists } from "../utils/check-survey.js";

const existSurveyList = [];

for (const survey of surveyList) {
	const { id: surveyId, year } = survey;
	const isExists = await checkSurveyExists(surveyId);

	if (!isExists) {
		console.warn(`Survey ID ${surveyId} for year ${year} does not exist.`);
		continue;
	}
	existSurveyList.push(survey);
	console.log(`Survey ID ${surveyId} for year ${year} exists.`);
}

console.log("\n\n")

for (const survey of existSurveyList) {
	const { id: surveyId, year } = survey;
	
	
}

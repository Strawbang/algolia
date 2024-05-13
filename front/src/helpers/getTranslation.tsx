import translations from '../../translations.json';
import { Translations } from '../../types/Translations';

export const getTranslation = (key: string, selectedLanguage: string) => {
	const translation: Translations = translations;
	return translation[key][selectedLanguage];
};

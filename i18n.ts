import i18n from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ru from "./locales/ru";
import uz from "./locales/uz";

export const useI18n = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const language = localStorage.getItem("lang") || navigator.language || "ru";
			i18n.changeLanguage(language);
		}
		i18n.on("languageChanged", (lang) => {
			localStorage.setItem("lang", lang);
		});
	}, []);
};

const initI18n = () => {
	if (!i18n.isInitialized) {
		i18n.use(initReactI18next).init({
			resources: {
				en: { translation: en },
				ru: { translation: ru },
				uz: { translation: uz },
			},
			lng: "ru",
			fallbackLng: "ru",
			interpolation: {
				escapeValue: false,
			},
		});
	}
};

initI18n();

export default i18n;

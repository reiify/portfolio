"use client";

import { useTranslation } from "react-i18next";

export default function Page() {
	const { t } = useTranslation();

	return <h1>{t("route.projects")}</h1>;
}

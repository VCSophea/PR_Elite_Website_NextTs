import { useTranslation } from "react-i18next";

export default function NewsCard() {
  const { t } = useTranslation();

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{t("news")}</div>;
}

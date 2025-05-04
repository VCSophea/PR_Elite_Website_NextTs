"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Languages available in your application
  const languages = [
    { code: "en", label: "English" },
    { code: "km", label: "ខ្មែរ" },
  ];

  // Ensure that the component is only rendered on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("locale", lng);
  };

  return (
    <div className={className}>
      <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)} className="bg-transparent border border-gray-300 rounded px-2 py-1">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

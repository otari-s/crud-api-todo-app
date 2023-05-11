import { useLanguageContext } from "./context";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageContext();
  const { i18n } = useTranslation();

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="ge">ქართული</option>
    </select>
  );
}

export { LanguageSwitcher };

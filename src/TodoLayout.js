import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
// import { useLanguageContext } from "./context";
import { LanguageSwitcher } from "./LanguageSwitcher";

function TodoLayout() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>{t("tasks")}</li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export { TodoLayout };

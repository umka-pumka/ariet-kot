import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const HeaderTop = ({ openModal }) => {
   const { t, i18n } = useTranslation(); 
  return (
    <div className="header_top">
      <div className="contact-info">
        <BsTelephone className="icon" />
        <p>8 (812) 123-45-67</p>
        <p>{t("We work 7 days a week")}</p>
        <p>9:00 — 18:00</p>
      </div>
      <div className="auth-links">
     
        <TbLogin2 className="icon2" />
        <button onClick={() => openModal("login")} className="login-link">{t("Login")}</button>
        <span> / </span>
        <button onClick={() => openModal("register")} className="login-link">{t("Registration")}</button>
      </div>
    </div>
  );
};

export default HeaderTop;
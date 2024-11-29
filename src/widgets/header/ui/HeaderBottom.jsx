import React, { useState } from "react";
import logo from "../../../shared/assets/logo.png";
import Search from "./Search";
import { BiCart } from "react-icons/bi";
import { MdGTranslate } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useTranslation } from "react-i18next";

const HeaderBottom = () => {
  const navigate = useNavigate();
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const { t, i18n } = useTranslation(); 
  
  const handleChangeLang = ({ target: { value } }) => {
    i18n.changeLanguage(value);
  }; 

  return (
    <div className="header_bottom">
      <img src={logo} alt="PORTEN Logo" />
      <div className="nav">
        <NavMenu />
        <div className="header-icons">
          <div className="cart-icon-container" onClick={() => navigate(`/cart`)}>
            <BiCart className="iconCard" />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
          
          <div className="translate-icon-container" onClick={() => setShowLanguageOptions(!showLanguageOptions)}>
            <MdGTranslate className="iconCard" />
            {showLanguageOptions && (
  <div className="language-options">
    <button onClick={() => handleChangeLang({ target: { value: "en" } })}>{t("En")}</button>
    <button onClick={() => handleChangeLang({ target: { value: "ru" } })}>{t("Ru")}</button>
    <button onClick={() => handleChangeLang({ target: { value: "kg" } })}>{t("Kg")}</button>
  </div>
)}
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
       
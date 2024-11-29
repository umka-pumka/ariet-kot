import { NavLink } from "react-router-dom";
import { headerMenu } from "../../../constants";
import { useTranslation } from "react-i18next"; 
import "../header.scss";

const NavMenu = () => {
  const { t } = useTranslation(); 

  return (
    <div className="headerMenu">
      {headerMenu.map((page) => (
        <NavLink key={page.name} to={page.path} className="link">
          {t(page.name)} 
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;

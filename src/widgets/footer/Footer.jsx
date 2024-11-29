import { Link, NavLink } from "react-router-dom"
import "./footer.scss"
import { useTranslation } from "react-i18next";

const dataCategories = [

  {
    name: "watch",
    path: "/"
  },
  {
    name: "bracelets",
    path: "/"
  },
  {
    name: "belts",
    path: "/"
  },
  {
    name: "jewelry",
    path: "/"
  },
  {
    name: "cufflinks",
    path: "/"
  },

]
const Footer = () => {
  const { t, i18n } = useTranslation(); 
  return (
    <div className="">
      <div className="footer ">

        <div className="footer_text">
          <div className="footer_store">
            <h3>{t("About the store")}</h3>
            <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.")}</p>
          </div>
          <div className="footer_categories">
            <h3>{t("Categories")}</h3>
            <div>
              {dataCategories.map((page) => (
                <Link key={page.name} to={page.path} className="link">
                {t(page.name)} 
                </Link>
              ))}
            </div>
          </div>
          <div className="footer_mailing">
            <h3>{t("Newsletter")}</h3>
            <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.")}</p>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <p>{t("© 2020 All rights reserved")}</p>
        <NavLink className="figma">{t("Made Figma.info")}</NavLink>
      </div>
    </div>
  )
}

export default Footer
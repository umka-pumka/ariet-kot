import { useTranslation } from "react-i18next";
const NotFoundPage = () => {
  const { t, i18n } = useTranslation(); 

  return (
    <div style={{padding:"100px "}}>
      <div style={{}} >
       <h1 style={{fontSize:"90px" ,color:"white", textAlign:"center"}}> {t("404 Not Found ")}</h1>
        </div>
    </div>
  );
};

export default NotFoundPage;

import './brands.scss';
import { useTranslation } from "react-i18next";


import brands from "../../shared/assets/brands.png"
const Brands = () => {
    const { t, i18n } = useTranslation(); 
    
    const brandsArray = [brands, brands, brands, brands];

    return (
        <div className='brands'>
            <h2 className="title_h2">{t("our brands")}</h2>
            <div className="line"></div>
            <div className="brands_img">
                {brandsArray.map((brand, index) => (
                    <img key={index} src={brand} alt={`brand-${index}`} />
                ))}
            </div>
        </div>
    );
}

export default Brands;

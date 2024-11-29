import "./collection.scss"
import { useTranslation } from "react-i18next";
const Collection = () => {
    const { t, i18n } = useTranslation(); 
    return (
        
        <div className='collection'>
            <div className='collection_img'></div>
            <div className='collection_text'>
                <div>
                    <h2 className="title_h2">{t("Collection 2018")}</h2>
                    <div className="line"></div>
                    <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.")} </p>
                    <button>{t("view collection")}</button>
                </div>
            </div>
        </div>
    )
}

export default Collection
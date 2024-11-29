import { useState } from "react";
import "../search.scss"
import { useTranslation } from "react-i18next";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); 
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ser'>
      <div className={`searchbox ${isOpen ? 'open' : ''}`}>
        <input type="text" className=' input' placeholder={t("search...")}/>
        <button className="submit" onClick={toggleSearch}>
        </button>
      </div>
    </div>
  )
}

export default Search
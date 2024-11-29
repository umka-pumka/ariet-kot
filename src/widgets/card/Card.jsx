
import { useDispatch, useSelector } from "react-redux";
import { addToLike, removeFromLike } from "../../app/redux/slices/favoritesSlice";
import { addItemToCart } from "../../app/redux/slices/cartSlice";
import cardImage from "../../shared/assets/card.png";
import "./card.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCart } from "react-icons/bi";
import { useTranslation } from "react-i18next";


const Card = ({ post }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favorites.items);

    const truncateText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };
   
    const handleCardToggle=()=>{
         dispatch(addItemToCart(post)) 
         toast.success("Товар добавлен в корзину");
    }

    return (
        <div className="card">
            <div className="cardimg">
              
                <img src={cardImage} alt="Card" />
            </div>
            
           
            {post ? (
                <>
                    <h5 onClick={() => handleClick(post.id)}>{truncateText(post.title)}</h5>
                    <p>{t("165,000 RUB ")}</p>
                </>
            ) : (
                <p>{t("No content available")}</p>
            )}
             <button className="btnCart" onClick={handleCardToggle}>
             <BiCart className="iconCard" />{t("Add to cart")}</button>
        </div>
    );
};

export default Card;

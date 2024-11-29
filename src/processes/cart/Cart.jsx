import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateItemQuantity, clearCart } from "../../app/redux/slices/cartSlice"; 
import { toast } from "react-toastify";
import "./cart.scss";
import cardImage from "../../shared/assets/card.png";
import { useTranslation } from "react-i18next";


const Cart = () => {
    const { t, i18n } = useTranslation(); 
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart({ id }));
        toast.info("The product has been removed from the cart");
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateItemQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to empty your trash?")) {
            dispatch(clearCart());
            toast.warn("Cart cleared");
        }
    };
    const truncateText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };
   

    return (
        <div className="cart">
            <h2>{t("Basket")}</h2>
            {items.length === 0 ? (
                <p>{t("Cart is empty")}</p>
            ) : (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={cardImage} alt="Card" />
                                <div className="cart-item-details">
                                    <div className="item-info">
                                        <h5>{truncateText(item.title)}</h5>
                                        
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        />
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id)}>{t(" Delete")}</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                       
                        <button onClick={handleClearCart}>{t("Clear Cart")}</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

import HeaderTop from "./ui/HeaderTop";
import HeaderBottom from "./ui/HeaderBottom";
import BurgerMenu from "./ui/BurgerMenu";
import ModalAuth from "./ui/ModalAuth";
import { useAuth } from "./model/useAuth";
import "./header.scss";

const Header = () => {
  const { activeModal, openModal, closeModal } = useAuth();

  return (
    <header>
      <div className="">
        <div className="header">
          <HeaderTop openModal={openModal} />
          <HeaderBottom />
        </div>
        <BurgerMenu />
      </div>

      <ModalAuth activeModal={activeModal} closeModal={closeModal} />
    </header>
  );
};

export default Header;

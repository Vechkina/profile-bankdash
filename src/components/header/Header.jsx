import logo from "../../img/logo.svg";

import search from "../../img/search.png";
import settings from "../../img/settings.png";
import notification from "../../img/notification.png";
import avatar from "../../img/avatar.png";

import burger from "../../img/burger.svg";

import './header.scss';

const Header = ({ setOpen, isOpen }) => {
  return (
    <header className="header">
      <a href="#">
        <img className="header__logo" src={logo} alt="Логотип" />
      </a>
      <div className="header__line-vertical"></div>
      <div className="header__wrapper">
        <button
          type="button"
          className="header__burger-menu"
          onClick={() => setOpen(!isOpen)}
        >
          <img src={burger} alt="Кнопка открыть меню" />
        </button>
        <div>
          <h2 className="header__title">Setting</h2>
        </div>
        <div className="header__menu">
          <div className="header__search-wrapper">
            <input
              className="header__search-input"
              type="text"
              placeholder="Search for something"
            />
            <img className="header__search-icon" src={search} alt="search" />
          </div>
          <div className="header__settings">
            <a href="#">
              <img
                className="header__settings-img"
                src={settings}
                alt="settings"
              />
            </a>
          </div>
          <div className="header__notification">
          <a href="#">
            <img
              className="header__notification-img"
              src={notification}
              alt="notification"
            />
          </a>
          </div>
          <div className="header__avatar">
            <img className="header__avatar-img" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

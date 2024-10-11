import "./navigationTabs.scss";

const NavigationTabs = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li>
          <a className="navigation__link navigation__link--active" href="#">
            Edit Profile
          </a>
          <div className="line"></div>
        </li>
        <li>
          <a className="navigation__link" href="#">Preferences</a>
        </li>
        <li>
          <a className="navigation__link" href="#">Security</a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationTabs;

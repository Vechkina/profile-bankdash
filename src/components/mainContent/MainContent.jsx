import AvatarEditor from ".././avatarEditor/AvatarEditor";
import NavigationTabs from "../navigationTabs/NavigationTabs";
import UserProfileForm from "../userProfileForm/UserProfileForm";

import "./mainContent.scss";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="main-content__wrapper">
        <div className="main-content__container">
          <NavigationTabs />
          <div className="main-content__body">
            <AvatarEditor />
            <UserProfileForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

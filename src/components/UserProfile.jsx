import React from "react";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Charlie Puth</div>
        <div className="image">
          <img src="https://cdn.justjaredjr.com/wp-content/uploads/headlines/2022/05/charlie-puth-comments-on-labels-needing-artists-to-go-viral-on-tiktok-after-halsey-speaks-out.jpg" />
        </div>
      </div>
      <div className="UserProfile-menu">
        <div className="UserProfileSwitch">
          <ul>
            <li>
              <div className="UserProfile-image">
                <img src="http://lorempixel.com/96/96" />
              </div>
              <div className="UserProfile-name">Tony</div>
            </li>
            <li>
              <div className="UserProfile-image">
                <img src="http://lorempixel.com/96/96" />
              </div>
              <div className="UserProfile-name">Stark</div>
            </li>
          </ul>
        </div>
        <div className="UserNavigation">
          <ul>
            <li>Your Account</li>
            <li>Help Center</li>
            <li>Sign out of Netflix</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

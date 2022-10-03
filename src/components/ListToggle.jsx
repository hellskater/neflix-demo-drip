import React, { useState } from "react";

const ListToggle = () => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <div onClick={handleClick} data-toggled={toggled} className="ListToggle">
      <div>
        <i className="fa fa-fw fa-plus"></i>
        <i className="fa fa-fw fa-check"></i>
      </div>
    </div>
  );
};

export default ListToggle;

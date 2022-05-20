import "./list.scss";
import List from "./List";
import React from "react";
const AddList = () => {
    const [state, useState] = React.useState(0);
    
  return (
    <React.Fragment>
      <List
        items={[
          {
            className: "sidebar__list--plus",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1V11"
                  stroke="#868686"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 6H11"
                  stroke="#868686"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            name: "Add list",
            active: false,
          },
        ]}
        isRemovable={true}
      />
      <div className="sidebar__popup">
        123
      </div>
    </React.Fragment>
  );
};
export default AddList;

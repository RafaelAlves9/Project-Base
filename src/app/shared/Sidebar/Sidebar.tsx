import React from "react";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarLeft from "./SidebarLeft/SidebarLeft";

const Sidebar = () => {

    return(
        <React.Fragment>
            <SidebarTop />
            <SidebarLeft />
        </React.Fragment>
    );
};

export default Sidebar;
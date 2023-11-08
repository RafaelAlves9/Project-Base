import React, { useState } from "react";
import { useEffect } from "react";

// type props = {
//     isOpen: boolean;
// };

const SidebarLeft = () => {
    const [route, setRoute] = useState<string>("home");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const param = window.location.href;

    // const ItemList = ["home"];

    const getCurrentParamRoute = () => {
        const segments = param.split('/');
        const lastParam = segments[segments.length - 1];
        console.log(route);

        if(lastParam.length > 0){
            setRoute(lastParam);
        } else setRoute("home");
    };

    // const logoutMethod = (): void => {
    //     localStorage.removeItem("user");
    //     dispatch(setOpenSideBar(false));
    //     navigate("/login");
    // };

    useEffect(() => {
        getCurrentParamRoute();
    }, [param]);

    return(
        <React.Fragment>
            
        </React.Fragment>
    );
};

export default SidebarLeft;
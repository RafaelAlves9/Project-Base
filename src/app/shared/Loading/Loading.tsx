import React from "react";

type props = {
    isLoadingParam?: boolean;
};

const Loading = ({ isLoadingParam = false }: props) => {
    // const { isLoading } = useAppSelector((state) => state.loading);
    console.log(isLoadingParam);
    
    return(
        <React.Fragment>
            
        </React.Fragment>
    );
};

export default Loading;
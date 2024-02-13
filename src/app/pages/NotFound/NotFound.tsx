import { defaultApi } from "@config/axios/axios.helpers";


const NotFound = () => {
    defaultApi()
    return(
        <h1>NotFound</h1>
    );
};

export default NotFound;
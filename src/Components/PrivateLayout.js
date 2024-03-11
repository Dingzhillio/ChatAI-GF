import { Navigate } from "react-router-dom";
import { userService } from "../services/user.service";

const PrivateLayout = ({children}) => {
    const user = userService.read();
    return user ? <Navigate to={"/home"} replace={true} /> : children;
}

export default PrivateLayout;
import { Children } from "react";
import

const PrivateRoutes = ({Children})=>{
    const{isAuth} = useSelector((state) => state.auths);

    if(!Auth){
        return<Navigate to="login"/>;

    }
    return Children
}
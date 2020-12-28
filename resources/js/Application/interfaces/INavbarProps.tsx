import { RouteComponentProps } from "react-router-dom";
import { IProduct } from "./IProduct";

interface INavbarProps extends RouteComponentProps<any> {
    open: boolean,
    handleDrawer(): void,
    setAuth: any,
    userMoney: number,
}

export default INavbarProps;


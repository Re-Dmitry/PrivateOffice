import { RouteComponentProps } from 'react-router-dom';

interface ILoginViewProps extends RouteComponentProps<any> {
    auth: boolean,
    setAuth(status: boolean): boolean
}

export default ILoginViewProps;


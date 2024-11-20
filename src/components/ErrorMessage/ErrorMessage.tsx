import img from './error.gif';
import {Typography} from "antd";


interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({message}:ErrorMessageProps) => {
    return (
        <>
            <img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}}
                 src={img}
                 alt="error"/>
            <Typography.Title style={{textAlign: "center"}} level={3}>{message || "An unexpected error occurred. Please try again later."}</Typography.Title>
        </>
    )
}

export default ErrorMessage;
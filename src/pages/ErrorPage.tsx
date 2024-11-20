import React from 'react';
import { Typography } from 'antd';
import {Link} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const ErrorPage: React.FC<{ message?: string }> = ({ message }) => (
    <>
        <div>
            <ErrorMessage message={message} />
            <Link style={{ display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24px', marginTop: '30px' }} to="/">
                Back to main page
            </Link>
        </div>
    </>
);

export default ErrorPage;

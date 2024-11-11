import React from 'react';
import { Typography } from 'antd';

const ErrorPage: React.FC<{ message?: string }> = ({ message }) => (
    <div>
        <Typography.Title level={1}>Something went wrong</Typography.Title>
        <Typography.Title level={2}>{message || "An unexpected error occurred. Please try again later."}</Typography.Title>
    </div>
);

export default ErrorPage;

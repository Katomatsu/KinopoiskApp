import React from 'react';
import {MovieModel} from "../../models";
import {Card, Typography, List, Skeleton} from "antd";
import {Link} from "react-router-dom";
import styled from "styled-components";

interface MovieItemProps {
    item?: MovieModel
}

const {Title} = Typography

const StyledImage = styled.img`
    height: 300px !important;
    width: 100% !important;
    object-fit: cover !important;
`;
const StyledSkeletonImage = styled(StyledImage).attrs({ as: Skeleton.Image })``;

const StyledCard = styled(Card)`
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
`;

const MovieItem = ({item}: MovieItemProps) => {

    return (
        <List.Item>
            <Link to={`/${item.id}`}>
                <StyledCard hoverable
                            cover={item.poster?.previewUrl ? <StyledImage src={item.poster.previewUrl}
                                                                          alt={item.name}/> : <StyledSkeletonImage/>}>
                    <Title level={4}>{item.name ?? item.alternativeName}</Title>
                </StyledCard>
            </Link>
        </List.Item>
    );
};

export default MovieItem;
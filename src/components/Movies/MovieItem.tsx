import React from 'react';
import {MovieModel} from "../../models";
import {Card, Typography, List} from "antd";
import {Link} from "react-router-dom";
import styled from "styled-components";

interface MovieItemProps {
  item?: MovieModel
}

const {Title} = Typography

const StyledListItem = styled(List.Item)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px; 
`

const StyledImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
`;

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
    <StyledListItem >
      <Link to={`/movies/${item.id}`}>
        <StyledCard hoverable
                    cover={<StyledImage src={item.poster.previewUrl}
                                        alt={item.name}/>}>
          <Title level={4}>{item.name ?? item.alternativeName}</Title>
        </StyledCard>
      </Link>
    </StyledListItem>
  );
};

export default MovieItem;
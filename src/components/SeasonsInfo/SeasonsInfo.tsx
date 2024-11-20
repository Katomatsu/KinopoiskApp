import React from 'react';
import { Typography } from "antd";
import { SeasonInfoModel } from "../../models";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

const StyledTitle = styled(Title)`
  margin-bottom: 20px; 
`;

const NoDataMessage = styled.h3`
  margin-top: 20px; 
`;

const SeasonsInfoWrapper = styled.div`
  margin-top: 20px;
`;

interface SeasonsInfoProps {
  seasons: SeasonInfoModel[] | undefined;
}

const SeasonsInfo = ({ seasons }: SeasonsInfoProps) => {
  return (
    <SeasonsInfoWrapper>
      <StyledTitle level={2}>Seasons Info:</StyledTitle>
      {seasons ? (
        seasons.map(season => (
          <Paragraph key={season.number}>
            Season {season.number}: {season.episodesCount} episodes
          </Paragraph>
        ))
      ) : (
        <NoDataMessage>There is no data about seasons</NoDataMessage>
      )}
    </SeasonsInfoWrapper>
  );
};

export default SeasonsInfo;
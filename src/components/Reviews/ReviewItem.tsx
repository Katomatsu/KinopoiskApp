
import React, { useState } from 'react';
import { Button, Typography } from "antd";
import { ReviewModel } from "../../models";
import styled from "styled-components";


const StyledTitle = styled(Typography.Title)`
  margin-top: 20px; 
`;

const StyledParagraph = styled(Typography.Paragraph)`
  margin: 0; 
`;

interface ReviewItemProps {
  review: ReviewModel
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <StyledTitle level={5}>
        {review.title}
      </StyledTitle>
      <StyledParagraph>
        {isExpanded ? review.review : `${review.review.slice(0, 500)}...`}
        <Button type={'link'}
                onClick={() => setIsExpanded(prev => !prev)}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>
      </StyledParagraph>
    </>
  );
};
export default ReviewItem;
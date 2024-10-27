import React from 'react';
import {Flex, Skeleton} from "antd";

const MovieSkeleton = () => {
  return (
    <Flex vertical gap={20}>
      <Skeleton.Image style={{width: 250, height: 300}}  active={true} />
      <Skeleton active={true} paragraph={false} />
    </Flex>
  );
};

export default MovieSkeleton;
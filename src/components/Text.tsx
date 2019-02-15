import React from 'react';
import styled from '@emotion/styled';

type PropsType = {
  children: JSX.Element;
};

const NormalText = styled.span`
  font-size: 12px;
`;

export default function Text(props: PropsType) {
  return <NormalText>{props.children}</NormalText>;
}

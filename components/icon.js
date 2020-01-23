import React from 'react';
import styled from 'styled-components';

const DEFAULT_SIZE = '32px';

const StyledIcon = styled.i`
  font-size: ${props => props.size || DEFAULT_SIZE};
  color: inherit;
  ${props => props.mr && `margin-right: ${props.mr}`};

  :before {
    color: inherit;
  }
`;

const Icon = ({
  name, className, mr, ...props
}) => (
  <StyledIcon title={name} className={`fa fa-${name} ${className || ''}`} mr={mr} {...props} />
);

export default Icon;

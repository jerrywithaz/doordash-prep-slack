import React from 'react';
import { BoxProps } from './Box.types';
import * as Styled from './Box.styled';

const Box: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, vertical, horizontal, flexDirection, ...restProps }) => {
    return (
        <Styled.Box {...restProps} flexDirection={vertical ? "column" : horizontal ? "row" : flexDirection}>
            {children}
        </Styled.Box>
    );
}

export default Box;

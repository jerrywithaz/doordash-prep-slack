import React from 'react';
import { TextProps } from './Text.types';
import * as Styled from './Text.styled';

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({ children, color, bold, fontWeight, ...restProps }) => {
    return (
        <Styled.Text {...restProps} color={color} fontWeight={bold ? "bold" : fontWeight}>
            {children}
        </Styled.Text>
    );
}

export default Text;

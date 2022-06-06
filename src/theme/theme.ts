import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        lg: 32,
        xl: 64,
        xxl: 128
    }
}

export type SpacingKey = keyof DefaultTheme['spacing'];

export default theme;


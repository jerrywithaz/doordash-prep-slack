import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        spacing: {
            xs: number;
            s: number;
            m: number;
            lg: number;
            xl: number;
            xxl: number;
        }
    }
}
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "700": "#47585B",
            "200": "#DADADA",
            "50": "#F5F8FA"
        },
        yellow: {
            "200": "#FFBA08"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.700'
            }
        }
    }
})
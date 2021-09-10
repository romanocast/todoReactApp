import { createMuiTheme } from '@material-ui/core/styles'
import {yellow, orange, pink, lightGreen} from '@material-ui/core/colors'

export const theme = createMuiTheme()

export const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: pink[500],
        },
        secondary: {
            main: lightGreen[500]
        },
    },
})

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
})
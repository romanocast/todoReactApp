import { createMuiTheme } from '@material-ui/core/styles'
import {yellow, orange, pink, lightGreen, cyan } from '@material-ui/core/colors'

export const theme = createMuiTheme()

export const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[500],
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
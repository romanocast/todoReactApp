import { createMuiTheme } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core'
import {yellow, orange, pink, lightGreen, cyan, brown, purple } from '@material-ui/core/colors'

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

export const gaggiTheme = createTheme({
    palette: {
        primary: {
            main: brown[500]
        }
    }
})

export const purpTheme = createTheme({
    palette: {
        primary: {
            main: purple[500]
        }
    }
})


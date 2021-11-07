import { createMuiTheme } from '@material-ui/core/styles';

const COLOR = {
    light: '#dfdfdf',
    lightDark: '#e2bb71',
    medium: '#0f4d9e',
    bright: '#c47816',
    brightDark: '#9c6010',
    dark: '#092b5e',
    darkest: '#041631'
};

export const MUI_THEME = createMuiTheme({
    palette: {
        primary: {
            main: COLOR.medium
        },
        secondary: {
            main: COLOR.bright
        }
    },
    overrides: {
        MuiListItem: {
            root: {
                color: COLOR.light,
                "&$selected": {
                    backgroundColor: COLOR.medium,
                    "&:hover": {
                        backgroundColor: COLOR.brightDark
                    },
                },
            },
            button: {
                "&:hover": {
                    backgroundColor: COLOR.brightDark
                },
            },
        },
        MuiListItemText: {
            secondary: {
                color: COLOR.lightDark
            }
        },
        MuiListItemIcon: {
            root: {
                color: COLOR.light
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: COLOR.medium
            }
        },
        MuiIconButton: {
            root: {
                color: COLOR.light
            }
        },
        MuiButton: {
            root: {
                color: COLOR.light,
                backgroundColor: COLOR.medium
            }
        }
    }
});
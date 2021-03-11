import { createMuiTheme } from '@material-ui/core/styles';

const COLOR = {
    light: '#bcbcc5',
    dark: '#092b5e',
    medium: '#0f4d9e',
    main: '#a3702e',
    darkest: '#092247'
};

export const MUI_THEME = createMuiTheme({
    palette: {
        primary: {
            main: COLOR.medium
        },
        secondary: {
            main: COLOR.main
        }
    },
    overrides: {
        MuiListItem: {
            root: {
                color: COLOR.light,
                "&$selected": {
                    backgroundColor: COLOR.medium,
                    "&:hover": {
                        backgroundColor: COLOR.main
                    },
                },
            },
            button: {
                "&:hover": {
                    backgroundColor: COLOR.main
                },
            },
        },
        MuiListItemText: {
            secondary: {
                color: COLOR.darkest
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
        },
        MuiMenuItem: {
            root: {
                color: COLOR.darkest,
                "&$selected": {
                    backgroundColor: COLOR.medium,
                    "&:hover": {
                        backgroundColor: COLOR.main
                    }
                }
            }
        }
    }
});
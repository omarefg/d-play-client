import { makeStyles } from '@material-ui/core/styles'

const DateInputStyles = makeStyles(theme => ({
    'date-input__input': {
        width: 'calc(90% - 8px)',
        margin: '10px !important',
        '& .MuiInputBase-root': {
            color: 'white',
            paddingLeft: '5px',
            fontSize: '14px',
        },
        '& .MuiInput-underline:before': {
            borderBottom: `2px solid ${theme.dPrimary}`,
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${theme.dPrimary}`,
        },
        '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${theme.dPrimary}`,
        },
        '& .MuiButtonBase-root': {
            color: `${theme.dPrimary}`,
            '&:hover': {
                backgroundColor: 'rgba(0, 209, 247, .08)',
            },
        },
        '& .MuiFormLabel-root': {
            color: `${theme.dPrimary}`,
            top: '-5px',
            left: '0',
            fontSize: '1.1em',
            transition: '.3s',
        },
        '& .MuiFormLabel-root.Mui-focused[data-shrink="true"]': {
            color: `${theme.dPrimary}`,
            top: '-5px',
            left: '0',
            fontSize: '1.1em',
            transition: '.3s',
        },
        '& .MuiInputLabel-formControl[data-shrink="false"]': {
            transform: 'translate(0, 24px) scale(0.8)',
            color: 'white',
        },
    },
    'date-input__modal': {
        '& .MuiPickersToolbar-toolbar': {
            backgroundColor: `${theme.dSecondaryLight}`,
        },
        '& .MuiPickersToolbarText-toolbarBtnSelected': {
            color: `${theme.dPrimary}`,
        },
        '& .MuiPickersToolbarText-toolbarTxt': {
            color: `${theme.dPrimary}`,
        },
        '& .MuiPickersYear-root:focus': {
            color: 'white',
        },
        '& .MuiPaper-root': {
            color: `${theme.dPrimary}`,
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            backgroundColor: `${theme.dSecondaryLight}`,
        },
        '& .MuiTypography-colorPrimary': {
            color: 'white',
        },
        '& .MuiButton-root': {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '& .MuiButton-textPrimary': {
            color: `${theme.dPrimary}`,
        },
        '& .MuiPickersDay-day': {
            color: `${theme.dPrimary}`,
        },
        '& .MuiPickersCalendarHeader-dayLabel': {
            color: `${theme.dPrimary}`,
        },
        '& .MuiPickersDay-daySelected': {
            color: `${theme.dSecondary}`,
            fontWeight: '500',
            backgroundColor: `${theme.dThird}`,
            '&:hover': {
                backgroundColor: `${theme.dThird} !important`,
                color: `${theme.dSecondary} !important`,
            },
        },
        '& .MuiPickersCalendarHeader-iconButton': {
            backgroundColor: `${theme.dPrimary}`,
            color: `${theme.dSecondary}`,
        },
        '& .MuiIconButton-root:hover': {
            backgroundColor: `${theme.dSecondary}`,
            color: `${theme.dPrimary}`,
        },
        '& .MuiPickersCalendarHeader-switchHeader': {
            padding: '0 12px',
        },
        '& .MuiIconButton-root': {
            padding: '5px',
        },
        '& .MuiPickersYearSelection-container': {
            background: `${theme.dSecondaryLight}`,
            '&::-webkit-scrollbar': {
                width: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
                width: '5px',
                height: '5em',
                background: `${theme.dPrimary}`,
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
        },
        '& .MuiPickersBasePicker-pickerView, .MuiDialogActions-root': {
            backgroundColor: `${theme.dSecondaryLight}`,
        },
        '& .MuiTypography-subtitle1, .MuiButton-root, .MuiTypography-body1, .MuiTypography-caption, .MuiTypography-body2': {
            fontFamily: '\'Ubuntu\', sans-serif',
        },
    },
}))

export default DateInputStyles

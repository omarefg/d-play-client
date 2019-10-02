import { makeStyles } from '@material-ui/core/styles'

const primaryColor = '#00d1f7'
const secondaryColor = '#181313'
const secondaryColorLight = 'rgba(24,19,19,0.95)'
const thirdColor = '#f6ba00'

const DateInputStyles = makeStyles(() => ({
    'date-input__input': {
        width: 'calc(90% - 8px)',
        margin: '10px !important',
        '& .MuiInputBase-root': {
            color: 'white',
            paddingLeft: '5px',
            fontSize: '14px',
        },
        '& .MuiInput-underline:before': {
            borderBottom: `2px solid ${primaryColor}`,
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${primaryColor}`,
        },
        '& .MuiInput-underline:after': {
            borderBottom: `2px solid ${primaryColor}`,
        },
        '& .MuiButtonBase-root': {
            color: `${primaryColor}`,
            '&:hover': {
                backgroundColor: 'rgba(0, 209, 247, .08)',
            },
        },
        '& .MuiFormLabel-root': {
            color: `${primaryColor}`,
            top: '-5px',
            left: '0',
            fontSize: '1.1em',
            transition: '.3s',
        },
        '& .MuiFormLabel-root.Mui-focused[data-shrink="true"]': {
            color: `${primaryColor}`,
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
            backgroundColor: `${secondaryColorLight}`,
        },
        '& .MuiPickersToolbarText-toolbarBtnSelected': {
            color: `${primaryColor}`,
        },
        '& .MuiPickersToolbarText-toolbarTxt': {
            color: `${primaryColor}`,
        },
        '& .MuiPickersYear-root:focus': {
            color: 'white',
        },
        '& .MuiPaper-root': {
            color: `${primaryColor}`,
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            backgroundColor: `${secondaryColorLight}`,
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
            color: `${primaryColor}`,
        },
        '& .MuiPickersDay-day': {
            color: `${primaryColor}`,
        },
        '& .MuiPickersCalendarHeader-dayLabel': {
            color: `${primaryColor}`,
        },
        '& .MuiPickersDay-daySelected': {
            color: `${secondaryColor}`,
            fontWeight: '500',
            backgroundColor: `${thirdColor}`,
            '&:hover': {
                backgroundColor: `${thirdColor} !important`,
                color: `${secondaryColor} !important`,
            },
        },
        '& .MuiPickersCalendarHeader-iconButton': {
            backgroundColor: `${primaryColor}`,
            color: `${secondaryColor}`,
        },
        '& .MuiIconButton-root:hover': {
            backgroundColor: `${secondaryColor}`,
            color: `${primaryColor}`,
        },
        '& .MuiPickersCalendarHeader-switchHeader': {
            padding: '0 12px',
        },
        '& .MuiIconButton-root': {
            padding: '5px',
        },
        '& .MuiPickersYearSelection-container': {
            background: `${secondaryColorLight}`,
            '&::-webkit-scrollbar': {
                width: '5px',
            },
            '&::-webkit-scrollbar-thumb': {
                width: '5px',
                height: '5em',
                background: `${primaryColor}`,
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
        },
        '& .MuiPickersBasePicker-pickerView, .MuiDialogActions-root': {
            backgroundColor: `${secondaryColorLight}`,
        },
        '& .MuiTypography-subtitle1, .MuiButton-root, .MuiTypography-body1, .MuiTypography-caption, .MuiTypography-body2': {
            fontFamily: '\'Ubuntu\', sans-serif',
        },
    },
}))

export default DateInputStyles

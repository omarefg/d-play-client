// References to style object ==> https://react-select.com/styles#style-object

const primaryColor = 'rgba(0, 209, 247, 1)'
const secondaryColor = 'rgba(24, 19, 19, 1)'
// const thirdColor = 'rgba(246, 186, 0, 1)'

const defaultInputStyle = styles => ({
    ...styles,
    color: 'white',
    fontFamily: '\'Ubuntu\', sans-serif',
    fontWeight: '400',
    fontSize: '15px',
    letterSpacing: '.1px',
    left: '4px',
})

export const defaultStyles = {
    container: styles => ({
        ...styles,
        width: 'calc(90% + 10px)',
    }),
    control: styles => ({
        ...styles,
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: `2px solid ${primaryColor}`,
        borderRadius: '0',
        margin: '10px',
        outline: 'none',
        boxShadow: 'none',
        ':hover': {
            border: 'none',
            borderBottom: `2px solid ${primaryColor}`,
        },
    }),
    dropdownIndicator: styles => ({
        ...styles,
        color: `${primaryColor}`,
        ':hover': {
            color: `${primaryColor}`,
        },
    }),
    placeholder: defaultInputStyle,
    singleValue: defaultInputStyle,
    option: (styles, { isDisabled }) => {
        return {
            ...styles,
            color: 'white',
            backgroundColor: 'transparent',
            cursor: isDisabled ? 'not-allowed' : 'default',
            fontFamily: '\'Ubuntu\', sans-serif',
            fontWeight: '400',
            fontSize: '15px',
            letterSpacing: '.1px',
            ':hover': {
                ...styles[':hover'],
                backgroundColor: `${primaryColor}`,
                color: `${secondaryColor}`,
            },
        }
    },
    menu: styles => ({
        ...styles,
        backgroundColor: '#221b12',
        border: 'none',
        boxShadow: 'none',
    }),
    menuList: styles => ({
        ...styles,
        '::-webkit-scrollbar': {
            width: '5px',
        },
        '::-webkit-scrollbar-thumb': {
            width: '5px',
            height: '5em',
            backgroundColor: `${primaryColor}`,
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
    }),
    input: defaultInputStyle,
    indicatorSeparator: styles => ({ ...styles, backgroundColor: `${primaryColor}` }),
    clearIndicator: styles => ({
        ...styles,
        color: `${primaryColor}`,
        ':hover': {
            color: `${primaryColor}`,
        },
    }),
}

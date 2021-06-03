interface IThemes {
    [key: string]: {
        primary: string,
        secondary: string,
        light: string,
        dark: string,
        medium: string
    }
}

const Themes = {
    basic: {
        primary: '#D99D55',
        secondary: '#593312',
        light: '#F2D5BB',
        dark: '#401801',
        medium: '#A67356'
    }
}

export default Themes as IThemes
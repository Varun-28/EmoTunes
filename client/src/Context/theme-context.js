import { createContext, useContext, useState } from "react";

const light = {
    bgColor: "#FBE5E5",
    primaryColor: "#060930",
    secondaryColor: "#E60965",
    shadowColor: "#F94892"
}
const dark = {
    bgColor: "#060930",
    primaryColor: "#FBE5E5",
    secondaryColor: "#FFA1C9",
    shadowColor: "#595B83"
}
const ThemeContext = createContext({mode: light, isLight: true});
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState({mode: light, isLight: true});
    const themeHandler = () => {
        theme.isLight ? setTheme({mode: dark, isLight: false}) : 
        setTheme({mode: light, isLight: true});
    }
    return (
        <ThemeContext.Provider value={{theme, themeHandler}}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => useContext(ThemeContext);

export {useTheme, ThemeProvider}
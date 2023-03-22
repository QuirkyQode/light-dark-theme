import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSectoion = () => {
    const theme  = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    console.log(theme, AppTheme[theme])

    return (
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`
        }
        }>
            <h1>Context API theme toggler</h1>
            {/* <p>Jump over the moon.</p> */}
            <button
            style={{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: "#FFF",
                border: `${currentTheme.border}`
            }}
            >I'm a Fancy button</button>
        </div>
    )
}

export default HeroSectoion;

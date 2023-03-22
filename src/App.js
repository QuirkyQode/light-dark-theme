import React, {useState} from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSectoion from "./Components/HeroSection";


const App = () => {
  const themeHook = useState("light")
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header></Header>
        <HeroSectoion></HeroSectoion>
        
      </div>
    </ThemeContext.Provider>

  )
}

export default App;

import { useState } from 'react';




function DarkModeToggle({darkMode, setDarkMode}){
    

    return (

            <button onClick ={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Toggle light mode':'Toggle dark mode'}
            </button>

    
    )


}

export default DarkModeToggle;
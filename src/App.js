import Router from './routes/Router'
import GlobalContext from "../src/contexts/GlobalContext";
import GlobalStyles from './styles/GlobalStyles'
import {dark,light,lightMUI,darkMUI} from '../src/styles/themes';
import { ThemeProvider as MUITheme} from "@mui/material/styles";
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [openModalError,setOpenModalError] = useState(false)
  const [openModalSucess, setOpenModalSucess] = useState(false)
  const [openModalFailed,setOpenModalFailed] = useState(false)
  const [cart,setCart] = useState([])
  const provider = { 
      cart,
      setCart,
      openModalError,
      setOpenModalError,
      openModalSucess, 
      setOpenModalSucess,
      openModalFailed,
      setOpenModalFailed,
      darkMode,
      setDarkMode
  }
  return (
    <GlobalContext.Provider value={provider}>
      <ThemeProvider theme={darkMode?dark:light}>
        <MUITheme theme={darkMode?darkMUI:lightMUI}>
          <Router/>
          <GlobalStyles/>
        </MUITheme>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default App

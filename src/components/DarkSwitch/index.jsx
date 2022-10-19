import React, { useContext } from "react";
import {Container} from './styles'
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { orange,indigo } from "@mui/material/colors";
import { Switch } from "@mui/material";
import GlobalContext from "../../contexts/GlobalContext";

const DarkSwitch=()=>{
    const {darkMode,setDarkMode} = useContext(GlobalContext)
  return (
   <Container>
        <span>Darkmode</span>
        <Switch label="darkmode" defaultChecked color="secondary" onChange={()=>setDarkMode(!darkMode)}/>
        {darkMode?<DarkModeTwoToneIcon sx={{color:indigo[200]}}/>:<LightModeTwoToneIcon sx={{color:orange[400]}}/>}
   </Container>
  );
}

export default DarkSwitch;
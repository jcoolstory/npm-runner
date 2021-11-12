import React from "react"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const LeftMenu = () => {
  const list = ["package", "help"]
  return <div style={{background:"#101920", width:"200px", minWidth:"200px"}}>
    {
      list.map( (v,idx)=> {
        return <ListItemButton key={idx}>  
        <ListItemText 
          primary={v} 
          // onClick={() => setIsShowMenu(false)}
          
        />
      </ListItemButton>
      })
    }
      
  </div>
}

export default LeftMenu
import React from "react"
import { Button } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

const ScriptList = ({scripts}) => {
  const runScript = (v) => {

  }
  return (
    <>
      <h5>Command</h5>
      {/* <List> */}
        {
          Object.keys(scripts).map((v)=> {
            return 
              <ListItem disablePadding>
                <Button variant="contained" size="small" onClick={()=> { runScript(v)}} >{v}</Button> 
              </ListItem>
          })
        }
      {/* </List> */}
    </>
  )
}

export default ScriptList
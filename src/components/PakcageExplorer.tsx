import React, { useEffect, useState } from "react"
import ScriptList from "./ScriptList"

const PackageExplorer = () => {
  const [data, setData] = useState("")
  const [scripts, setScripts] = useState({})
  const openFile = (event, data) => {
    const { fs } = window.electron;
    const files = fs.readdirSync(data[0]).filter(f => f === "package.json")
    fs.readFile(files[0], 'utf8', (err, str) => {
      setData(str);
      // setScripts(JSON.parse(str));
      setScripts(JSON.parse(str).scripts);
    })
  }

  useEffect(() => {
    window.electron.addEventListener("selectPath", openFile);
    return () => {
      window.electron.removeEventListener("selectPath", openFile);
    }
  }, [])

  return <>
    <div
      onClick={() => {
        window.electron.showDialog('.')
      }}
    >open</div>
    <ScriptList scripts={scripts} />
    {/* <div>{scripts}</div> */}
    {/* <pre>{data}</pre> */}
  </>
  
}

export default PackageExplorer
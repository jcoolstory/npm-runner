import React, { useEffect, useState } from "react"

const Dummy = () => {

  const [data, setData] = useState("")

  const openFile = (event, data) => {
    const { fs } = window.electron;
    const files = fs.readdirSync(data[0]).filter(f => f === "package.json")
    fs.readFile(files[0], 'utf8', (err, str) => {
      setData(str)
    }
    )
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

    <pre>{data}</pre>
  </>
}

export default Dummy
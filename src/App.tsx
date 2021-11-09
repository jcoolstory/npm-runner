import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState("")
  
  const openFile = (event,data)=> {
    const { fs } = window.electron;
    const files = fs.readdirSync(data[0]).filter(f => f === "package.json")
    fs.readFile(files[0], 'utf8',(err,str)=> {
      setData(str)
    }
  )}

  useEffect(() => {
      window.electron.addEventListener("selectPath",openFile );
    return ()=> {
      window.electron.removeEventListener("selectPath", openFile);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div
        onClick={()=>{
          window.electron.showDialog('.')
        }}
        >open</div>
        <pre>{data}</pre>
      </header>
    </div>
  );
}

export default App;

declare global {
  interface Window {
    electron: any
  }
}

// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Sidebar } from './layout/Sidebar'
import {RouterProvider} from "react-router-dom"
import router from './routes'

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

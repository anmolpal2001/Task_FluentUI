import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import '@fluentui/react/dist/css/fabric.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
    <App />
    </FluentProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

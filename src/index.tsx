import React from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './components/Login';
import './css/index.css'

export const Index = () => {
    
  return (
    <main className='mainWrapper'>
      <Login />
    </main>
  )
}
const root = createRoot(document.getElementById('root')!)
root.render(<Index />)
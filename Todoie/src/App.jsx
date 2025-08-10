import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoItemList from './components/TodoItemList'
import Button from './components/Button'
import "./style.css"

function App() {
  return (
    <div className='todo-container'>
      <Header title = "Todie App"/>
      <TodoItemList text='Eat' completed = {true} />
      <TodoItemList text='Code'/>
      <TodoItemList text='sleep' />
      <TodoItemList text='repeat'/>
      
      <Button />
    </div>
  )
}

export default App

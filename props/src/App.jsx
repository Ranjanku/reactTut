import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

function App() {
  // let myObj = {
  //   username : "Ranjan",
  //   age : 21,
  // }

  return (
    <>
      <Card username = "Siddhart" discription = "income tax officer"/>
      <Card username= "Ranjan" discription = "Aspiring engineer"/>
      <Card username= "pratyush" discription = "college student"/>
      <Card username="santosh"/>

    </>
  )
}

export default App

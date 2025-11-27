import React from "react"
import { Header } from "../components/Header"
import { Section } from "../components/Section"

import { Test } from "../components/Test"
import { Test1 } from "../components/Test1"
import { Test2 } from "../components/Test2"
import { ProfileCard } from "../components/ProfileCard"
import { ProfileMain } from "../components/ProfileMain"
import { PadsMain } from "../components/PadsMain"
import { Form } from "../components/Form"
export default function App () {
  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <>
      {/* <Header />
      <Section /> */}

      <Test />
      <ProfileCard />
      <ProfileMain />
      <PadsMain 
        darkmode={darkMode}/>
      {/* <Form /> */}
    </>
  )
}
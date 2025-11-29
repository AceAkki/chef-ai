import React from "react"
import { Header } from "../components/Header"
import { Section } from "../components/Section"

import { Test } from "../components/Test/Test"
import { Test1 } from "../components/Test/Test1"
import { Test2 } from "../components/Test/Test2"
import { ProfileCard } from "../components/Profile/ProfileCard"
import { ProfileMain } from "../components/Profile/ProfileMain"
import { Form } from "../components/Profile/Form"
import { PadsMain } from "../components/Pad/PadsMain"
export default function App () {
  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <>
      <Header />
      <Section />

      {/* <Test /> */}
      {/* <ProfileCard />
      <ProfileMain /> */}
      {/* <PadsMain 
        darkmode={darkMode}/> */}
      {/* <Form /> */}
    </>
  )
}
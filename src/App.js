/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import Card from "./Card.js"
import "./App.css"

function App() {
  const [tab, setTab] = useState("one")
  const [startTime, setStartTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // get the time when the page was first loaded
  useEffect(() => {
    setStartTime(Date.now())
  }, [])

  // get the time when a tab is changed (closed)
  // and put the previous tab's duration into state as seconds
  useEffect(() => {
    setStartTime(Date.now())
    const duration = Math.floor((Date.now() - startTime) / 1000)
    setDuration(duration)
  }, [tab])

  // in production, this is how I would send the final tab's duration to the back end
  // useEffect(() => {
  //   return () => {
  //     POST duration to back end
  //   }
  // }, [])

  const chooseTab = () => {
    if (tab === "one") {
      return <Card content="tab1 content" />
    } else if (tab === "two") {
      return <Card content="tab2 content" />
    } else if (tab === "three") {
      return <Card content="tab3 content" />
    } else {
      return <Card content="you have left the page" />
    }
  }

  return (
    <div className="App">
      {duration < 100000000 ? (
        <p>that tab was open for {duration} seconds</p>
      ) : (
        <p>this tab was opened at {startTime}</p>
      )}
      {tab !== "leave" && (
        <>
          <button onClick={() => setTab("one")}>Tab one</button>
          <button onClick={() => setTab("two")}>Tab two</button>
          <button onClick={() => setTab("three")}>Tab three</button>
        </>
      )}
      {chooseTab()}
      <br></br>
      <button onClick={() => setTab("leave")}>leave the page</button>
    </div>
  )
}

export default App

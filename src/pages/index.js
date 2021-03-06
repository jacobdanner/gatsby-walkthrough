import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/global.css" // ES Modules


export default function Home() {
  // In pure JS - return React.createElement("div", null, "Hello world!")
  return <div style={{ color: `purple`}}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="Random"/>
    </div>
}

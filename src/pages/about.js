import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            
            <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
            <Header headerText="another header" arbitraryPhrase="is arbitrary" />
            <p>Such wow. Very React.</p>
            <div>
                <h1>About me</h1>
                <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
            </div>
        </div>
    )
}
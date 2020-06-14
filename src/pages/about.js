import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"

export default function About({ data }) {
    return (
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food</p>
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link>
            
            <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
            <Header headerText="another header" arbitraryPhrase="is arbitrary" />
            <p>Such wow. Very React.</p>
            <div>
                <h1>About me</h1>
                <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
            </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
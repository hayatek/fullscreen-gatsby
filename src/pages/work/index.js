import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/works.module.css"

export default function Work() {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Webside I've created</h3>
      </div>
    </Layout>
  )
}

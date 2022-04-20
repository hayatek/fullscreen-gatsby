import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>I'm a software engineer</p>
        </div>
      </section>
    </Layout>
  )
}

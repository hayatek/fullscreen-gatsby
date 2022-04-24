import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as homeStyles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={homeStyles.content}>
        <div>
          <video autoPlay loop muted playsInline>
            <source src="/sea.mp4" />
          </video>
          <div className={homeStyles.overlay}></div>
          <div className={homeStyles.text}>
            <h2>Hello World!</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              dolor aperiam expedita rem impedit perspiciatis exercitationem qui
              vel, possimus neque adipisci obcaecati rerum in alias, sunt
              aspernatur at harum cupiditate.
            </p>
            <Link className={homeStyles.btn} to="/work">
              My Portfolio Projects
            </Link>
          </div>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
      </section>
    </Layout>
  )
}

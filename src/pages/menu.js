import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MenuCard from "../components/menuCard"

const MenuPage = () => (
  <Layout>
    <Seo title="Menu" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <section className="food-menu section">
      <div class="tile is-ancestor">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div class="tile is-ancestor">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div class="tile is-ancestor">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </section>
  </Layout>
)

export default MenuPage

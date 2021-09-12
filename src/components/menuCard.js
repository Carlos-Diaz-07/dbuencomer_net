import * as React from "react"
import { Link } from "gatsby"

const MenuCard = () => (
  <div class="tile is-parent">
    <div className="tile is-parent">
      <div class="card tile is-child">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Paella</p>
              <p class="subtitle is-6">#johnsmith</p>
            </div>
          </div>

          <div class="content">
           £10
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MenuCard

import { useState, useEffect } from "react"
import React from "react"
import "./CarouselMenu.scss"

export default function CarouselMenu () {
  const [stage, setStage] = useState(null)

  const handleNext = async () => {

  }

  const handlePrev = async () => {

  }

  useEffect(() => {

  }, )

  return (
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={process.env.PUBLIC_URL+"/images/regular_snake.png"} alt="regular game image" class="image regular-game d-block w-100"/>
        <div class="carousel-caption d-none d-md-block">
        <h2 class="text-description">Regular game of Snake</h2>
          <p>Move the snake around and eat those apples!
          The more the snake eats, the more it grows</p>
          <p>Try to make it on the High Scores list</p>
          <p>You can use WASD or Arrow keys to move</p>
        </div>
      </div>
      <div class="carousel-item hidden">
        <img src={process.env.PUBLIC_URL+"/images/nokia_snake.png"} alt="nokia game" class="image nokia-game"/>
        <div class="carousel-caption d-none d-md-block">
        <h2 class="text-description">Old School Snake</h2>
          <p>If you are feeling a bit nostalgic</p>
          <p>Try to make it on the High Scores list</p>
          <p>You can use WASD or Arrow keys to move</p>
        </div>
      </div>
      {/* <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div> */}
    </div>
    <button class="carousel-control-prev" type="button" onClick={handlePrev}data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" onClick={handleNext}data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
  )

}
import CarouselMenu from "../components/CarouselMenu/CarouselMenu"
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu"
import StartBtn from "../components/StartBtn/StartBtn"
import "./MainMenu.scss"

export default function MainMenu () {



  return (
    <>
      <HamburgerMenu />
      <section id="main-menu">
            <div id="modal-text">
                <h1 class="headline">Welcome To Snakes!</h1>
                <div class="middle">
                    <div class="container">
                        <h1 class="pickStage">Pick A Stage</h1>
                        <CarouselMenu />
                        <StartBtn />
                    </div>
                </div> 
            </div>
        </section>
    </>
  )
}
import "./HamburgerMenu.scss"

export default function HamburgerMenu () {

  return (
    <>
      <input type="checkbox" class="navi-checkbox" id="nav-check"/>
      <label for="nav-check" class="sun-menu">
          <span>&nbsp;</span>
      </label>
      <div class="sun-background"></div>
      <nav class="sun-list">
          <ul>
              <a href="../high_scores/HighScore.html" class="high-score-page page"><li>High Scores</li></a>
              <a href="../about_me/AboutMe.html" class="about-me page"><li>About Me</li></a>
          </ul>
      </nav>
    </>
  )
}
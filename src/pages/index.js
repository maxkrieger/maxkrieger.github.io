import React, { useEffect } from "react"
import ProjectBox from "../components/projectbox"
import voicelinerIcon from "../images/voiceliner.png"
import voicelinerCover from "../images/voiceliner-cover.png"
import spaceshifterIcon from "../images/spaceshifter-icon.png"
import spaceshifterCover from "../images/spaceshifter-bg.png"
import catchmeCover from "../images/catchMeCover.png"
import catchmeIcon from "../images/catchmeLogo.png"
import penroseScreen from "../images/penrose-screen.png"
import penroseIcon from "../images/pentagon.svg"
import sagaIcon from "../images/saga-icon.png"
import salienceMap from "../images/salience.png"
import liquidBg from "../images/liquid.png"
import liquidIcon from "../images/liquid-icon.svg"
import latexIcon from "../images/latex-icon.svg"
import latexBg from "../images/latex-screen.png"
import turtle from "../images/turtle.svg"
import mindBg from "../images/mind-bg.png"
import narrative from "../images/narrative.png"
import comicIcon from "../images/math-icon.svg"
import playdoh from "../images/playdoh.png"
import unseeable from "../images/unseeable.jpg"
import gripperBg from "../images/gripper-bg.png"
import gripper from "../images/gripper.svg"
import joinery from "../images/joinery.png"
import library from "../images/library.png"
import gripperScreen from "../images/gripper-screen.png"
import ghost from "../images/ghost.png"
import delve from "../images/delveCover.png"

import SEO from "../components/seo"
import Experiment from "../components/experiment"
import TinyList from "../components/tinyList"

const projects = [
  <section>
    <ProjectBox
      title="delve"
      kind={"rabbit hole interface"}
      link="https://delve.a9.io"
      external={true}
      bg={delve}
    />
    <ProjectBox
      title="catchMe"
      kind={"social goals app"}
      link="https://catchme.life"
      external={true}
      bg={catchmeCover}
      icon={catchmeIcon}
    />
    <ProjectBox
      title="Spaceshifter"
      kind={"embedding tuning tool"}
      link="/spaceshifter/"
      external={true}
      bg={spaceshifterCover}
      icon={spaceshifterIcon}
    />
    <ProjectBox
      title="Voiceliner"
      kind={"voice notes app"}
      link="/voiceliner/"
      external={true}
      bg={voicelinerCover}
      icon={voicelinerIcon}
    />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <Experiment title="joinery" image={joinery} slug="experiments/joinery" />
      {/* <Experiment
            title="library of worlds"
            image={library}
            slug="experiments/library-of-worlds"
          /> */}
      {/* <Experiment */}
      {/* title="ghost slotting" */}
      {/* image={ghost} */}
      {/* // slug="experiments/ghost-slotting" */}
      {/* /> */}
      <Experiment
        title="gripper"
        image={gripperScreen}
        slug="experiments/gripper"
      />
    </div>
    <ProjectBox
      title="Penrose"
      kind={"diagramming system"}
      link="https://penrose.ink"
      external={true}
      bg={penroseScreen}
      icon={penroseIcon}
    />
    <ProjectBox
      title="Chatting with Glue"
      kind={"interface comic"}
      external={true}
      link="http://a9.io/glue-comic/"
      bg={salienceMap}
      icon={sagaIcon}
    />
    <ProjectBox
      title="How to see the unseeable"
      link="/seeing-the-unseeable"
      bg={unseeable}
      kind={"visualization workshop"}
      icon={playdoh}
    />
    <ProjectBox
      title="Where is my mind? (situated)"
      kind={"fan music video"}
      link="https://vimeo.com/389667501"
      bg={mindBg}
      external={true}
      icon={turtle}
    />
    <ProjectBox
      title="LaTeX Complete"
      kind={"figma plugin"}
      link="https://www.figma.com/community/plugin/793023817364007801/LaTeX-Complete"
      bg={latexBg}
      external={true}
      icon={latexIcon}
    />
    <ProjectBox
      title="Defining Visual Narratives for Mathematics Declaratively"
      kind={"workshop paper"}
      link="krieger_plateau_2019.pdf"
      bg={narrative}
      external={true}
      icon={comicIcon}
    />
    <ProjectBox
      title="LiquidTime"
      kind={"time tool (2016)"}
      link="https://liquidti.me"
      bg={liquidBg}
      external={true}
      icon={liquidIcon}
    />
  </section>,
]

function IndexPage() {
  useEffect(() => {
    setTimeout(() => {
      const e = atob("b2kuOWFAb2xsZWg=").split("").reverse().join("")
      document.getElementById(
        "horn"
      ).innerHTML = `<a href="mailto:${e}">${e}</a>`
    }, 200)
  }, [])
  return (
    <>
      <SEO title="Home" />
      <p style={{ fontWeight: 400 }}>Gluing pieces together.</p>
      <p style={{ textAlign: "right", marginTop: "300px" }}>
        <span id="horn" style={{ color: "rgba(0,0,0,0.6)" }}>
          &nbsp;
        </span>
      </p>
    </>
  )
}

export default IndexPage

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

import SEO from "../components/seo"
import Experiment from "../components/experiment"
import TinyList from "../components/tinyList"

function IndexPage() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("horn").innerHTML = atob("b2kuOWFAeGFt")
        .split("")
        .reverse()
        .join("")
    }, 200)
  }, [])
  return (
    <>
      <SEO title="Home" />
      <p style={{ fontWeight: 400 }}>
        I care about enabling human flourishing at the planetary level, with
        universal access to abundance, beauty, and longevity. My background is
        in interaction design and implementation. I'd like to make learning hard
        things indistinguishable from doing them for real.
      </p>
      <p style={{ textAlign: "right", marginTop: -20 }}>
        <span id="horn" style={{ color: "rgba(0,0,0,0.6)" }}></span>
      </p>
      <section>
        <h2 className="divider">present</h2>
        <ProjectBox
          title="catchMe"
          kind={"get caught"}
          link="https://catchme.life"
          external={true}
          bg={catchmeCover}
          icon={catchmeIcon}
        />
      </section>
      <section>
        <h2 className="divider">experiments</h2>
        <div>
          <Experiment title="joinery" image={joinery} slug="joinery" />
        </div>
      </section>
      <section>
        <h2 className="divider">past</h2>
        <ProjectBox
          title="Spaceshifter"
          kind={"tune embeddings"}
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
        <ProjectBox
          title="Penrose"
          kind={"diagramming tool"}
          link="https://penrose.ink"
          external={true}
          bg={penroseScreen}
          icon={penroseIcon}
        />
        <ProjectBox
          title="Chatting with Glue"
          kind={"comic"}
          external={true}
          link="http://a9.io/glue-comic/"
          bg={salienceMap}
          icon={sagaIcon}
        />
        <ProjectBox
          title="How to see the unseeable"
          link="/seeing-the-unseeable"
          bg={unseeable}
          kind={"visualization exercise"}
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
      </section>
      <section>
        <h2 className="divider">tiny stuff</h2>
        <TinyList links={[["Cell Feed", "https://a9.io/gramstract/"]]} />
      </section>
      <section>
        <h2 className="divider">old</h2>
        <ProjectBox
          title="LiquidTime"
          kind={"time tool"}
          link="https://liquidti.me"
          bg={liquidBg}
          external={true}
          icon={liquidIcon}
        />
      </section>
    </>
  )
}

export default IndexPage

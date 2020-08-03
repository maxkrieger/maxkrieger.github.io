import React from "react"
import { Link } from "gatsby"
import ProjectBox from "../components/projectbox"
import penroseScreen from "../images/penrose-screen.png"
import penroseIcon from "../images/pentagon.svg"
import sagaIcon from "../images/saga-icon.png"
import salienceMap from "../images/salience.png"
import semanticIcon from "../images/semanticIcon.svg"
import semanticBg from "../images/semantic-bg.png"
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

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ fontWeight: 400 }}>
      I’m a student at Carnegie Mellon studying Cognitive Science and graduating
      in 2021.
    </p>
    <section>
      <h2 className="divider">present</h2>
      <ProjectBox
        title="Penrose"
        external={"diagramming tool"}
        link="https://penrose.ink"
        bg={penroseScreen}
        icon={penroseIcon}
      />
      <ProjectBox
        title="Chatting with Glue"
        external={"comic"}
        link="http://a9.io/glue-comic/"
        bg={salienceMap}
        icon={sagaIcon}
      />
    </section>
    <section>
      <h2 className="divider">past</h2>
      <ProjectBox
        title="How to see the unseeable"
        link="/seeing-the-unseeable"
        bg={unseeable}
        icon={playdoh}
      />
      <ProjectBox
        title="Where is my mind? (situated)"
        external={"fan music video"}
        link="https://www.figma.com/community/plugin/793023817364007801/LaTeX-Complete"
        bg={mindBg}
        icon={turtle}
      />
      <ProjectBox
        title="LaTeX Complete"
        external={"figma plugin"}
        link="https://vimeo.com/389667501"
        bg={latexBg}
        icon={latexIcon}
      />
      <ProjectBox
        title="Defining Visual Narratives for Mathematics Declaratively"
        external={"UIST Workshop Paper"}
        link="https://plateau-workshop.org/assets/papers-2019/9.pdf"
        bg={narrative}
        icon={comicIcon}
      />
      {/* <ProjectBox
        title="Artifacts of the artificial"
        link="https://plateau-workshop.org/assets/papers-2019/9.pdf"
        bg={narrative}
      /> */}
    </section>
    <section>
      <h2 className="divider">old</h2>
      <ProjectBox
        title="Semantic Calculator"
        external={"experimental repl"}
        link="https://semantic.a9.io/"
        bg={semanticBg}
        icon={semanticIcon}
      />
      <ProjectBox
        title="LiquidTime"
        external={"time management tool"}
        link="https://liquidti.me"
        bg={liquidBg}
        icon={liquidIcon}
      />
    </section>
  </Layout>
)

export default IndexPage

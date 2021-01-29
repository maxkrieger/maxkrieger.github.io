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
      in 2021. <a href="/resume.pdf">resume</a>
    </p>
    <p>
      📯 <pre style={{ display: "inline", padding: 0 }}>max@a9.io</pre>
    </p>
    <p>
      Besides Twitter, you can find some other half-baked thoughts on my{" "}
      <a href="/inquiry">inquiry page</a>.
    </p>
    <section>
      <h2 className="divider">present</h2>
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
    </section>
    <section>
      <h2 className="divider">past</h2>
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
        link="https://plateau-workshop.org/assets/papers-2019/9.pdf"
        bg={narrative}
        external={true}
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
        kind={"experimental repl"}
        link="https://semantic.a9.io/"
        bg={semanticBg}
        external={true}
        icon={semanticIcon}
      />
      <ProjectBox
        title="LiquidTime"
        kind={"time tool"}
        link="https://liquidti.me"
        bg={liquidBg}
        external={true}
        icon={liquidIcon}
      />
    </section>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import ProjectBox from "../components/projectbox"
import voicelinerIcon from "../images/voiceliner.png"
import voicelinerCover from "../images/voiceliner-cover.png"
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

import Layout from "../components/layout"
import SEO from "../components/seo"
import Callout from "../components/callout"
import TinyList from "../components/tinyList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ fontWeight: 400 }}>
      I'd like to construct environments that enable expressive, ambitious modes
      of learning and creating. <a href="/resume.pdf">resume</a>
    </p>
    <Callout
      outer="I'm open for freelance work in design, product, research, and devrel."
      inner="I'm growing in these areas and would love to work with thoughtful, supportive teams. Particularly with  projects in creative and scientific spaces. Reach out if you've been working on something for a while and are looking for a fresh perspective!"
    />
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
    </section>
    <section>
      <h2 className="divider">tiny stuff</h2>
      <TinyList links={[["Cell Feed", "https://a9.io/gramstract/"]]} />
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
        link="krieger_plateau_2019.pdf"
        bg={narrative}
        external={true}
        icon={comicIcon}
      />
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
  </Layout>
)

export default IndexPage

import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { useSpring, animated, useChain } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReactSpring = () => {
  const squareRef = React.useRef()
  const circleRef = React.useRef()
  const rectangleRef = React.useRef()
  const triangleRef = React.useRef()
  
  const squareProps = useSpring({
    from: { left: 10, opacity: 0 },
    to: { left: 400, opacity: 1 },
    config: { mass: 1, tension: 170, friction: 30 },
    ref: squareRef,
  })
  const circleProps = useSpring({
    from: { bottom: "10vh", opacity: 0 },
    to: { bottom: "65vh", opacity: 1 },
    config: { mass: 1, tension: 170, friction: 30 },
    ref: circleRef,
  })
  const rectangleProps = useSpring({
    from: { top: "10vh", left: "80vw", opacity: 0 },
    to: { top: "65vh", left: "20vw", opacity: 1 },
    config: { mass: 1, tension: 170, friction: 30 },
    ref: rectangleRef,
  })
  const triangleProps = useSpring({
    from: { top: "10vh", opacity: 0 },
    to: { top: "60vh", opacity: 1 },
    config: { mass: 1, tension: 170, friction: 30 },
    ref: triangleRef,
  })

  useChain([squareRef, circleRef, triangleRef, rectangleRef], [0, 0.3, 0.6, 0.9])
  return (
    <Layout>
      <SEO title="Home" />

      <animated.div style={squareProps} className="square"></animated.div>
      <animated.div style={circleProps} className="circle"></animated.div>
      <animated.div style={rectangleProps} className="rectangle"></animated.div>
      <animated.div style={triangleProps} className="triangle"></animated.div>

      {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    </Layout>
  )
}

export default ReactSpring

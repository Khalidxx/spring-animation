import * as React from "react"
import { CSSTransition } from "react-transition-group"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReactTransition = () => {
  const [showSquare, setShowSquare] = React.useState(false)

  //   const squareProps = useSpring({
  //     from: { left: 10, opacity: 0 },
  //     to: { left: 400, opacity: 1 },
  //     config: { mass: 1, tension: 170, friction: 30 },
  //     ref: squareRef,
  //   })
  //   const circleProps = useSpring({
  //     from: { bottom: "10vh", opacity: 0 },
  //     to: { bottom: "65vh", opacity: 1 },
  //     config: { mass: 1, tension: 170, friction: 30 },
  //     ref: circleRef,
  //   })
  //   const rectangleProps = useSpring({
  //     from: { top: "10vh", left: "80vw", opacity: 0 },
  //     to: { top: "65vh", left: "20vw", opacity: 1 },
  //     config: { mass: 1, tension: 170, friction: 30 },
  //     ref: rectangleRef,
  //   })
  //   const triangleProps = useSpring({
  //     from: { top: "10vh", opacity: 0 },
  //     to: { top: "60vh", opacity: 1 },
  //     config: { mass: 1, tension: 170, friction: 30 },
  //     ref: triangleRef,
  //   })

  return (
    <Layout>
      <SEO title="Home" />
      <button style={{ margin: "20px" }} onClick={() => setShowSquare(true)}>
        Show
      </button>
      <CSSTransition
        in={showSquare}
        timeout={300}
        classNames={{
          enter: "square--enter",
          enterDone: "square--enter-done",
          exit: "square--exit",
        }}
      >
        <div className="square" />
      </CSSTransition>
      {/* <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div className="circle" />
      </CSSTransition>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div className="rectangle" />
      </CSSTransition>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div className="triangle" />
      </CSSTransition> */}
    </Layout>
  )
}

export default ReactTransition

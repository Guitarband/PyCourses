import {useState, useEffect} from "react";
import ScrollRevealContent from "../hooks/ScrollRevealContent.jsx";
import "../styles/home.css";
import Footer from "../components/Footer.jsx";

function Home() {
    const colours = [
      "red", "sienna", "navy", "maroon", "olivedrab", "#4B0082"
    ]
    const [currentColour, setCurrentColour] = useState(colours[0])
    const [currentText, setCurrentText] = useState(colours[0])
    const [isDeleting, setIsDeleting] = useState(false)
    const [colorIndex, setColorIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const text = colours[colorIndex]
        const typingInterval = setInterval(() => {
            if (isPaused) return

            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, -1))
                if (currentText === "") {
                    setIsDeleting(false)
                }
            } else {
                setCurrentText((prev) => text.slice(0, prev.length + 1))
                if (currentText === text) {
                    setCurrentColour(colours[colorIndex])
                    setIsPaused(true)
                    setTimeout(() => {
                        let newIndex = Math.floor(Math.random() * colours.length)
                        if(newIndex === colorIndex) newIndex = (newIndex + 1) % colours.length
                        setColorIndex(newIndex)
                        setCurrentColour("black")
                        setIsPaused(false)
                        setIsDeleting(true)
                    }, 3000)
                }
            }
        }, isDeleting ? 100 : 200)

        return () => clearInterval(typingInterval)
    }, [currentText, isDeleting, colorIndex])

    return(
      <div className={"Home"}>
          <ScrollRevealContent>
              <section className={"hero"} style={{borderColor: currentColour}}>
                  <h2 className={"homeTitle"}>
                  <span className={"titleTag"}>&lt;h2 style="color:
                      <span id={"changingText"} style={{color: currentColour}}>{currentText}</span>
                      ;"&gt;</span>
                      <span className={"titleText"}
                            style={{color: currentColour}}>Learn programming with PyCourses</span>
                      <span className={"titleTag"}>&lt;/h2&gt;</span>
                  </h2>
                  <a href={"/courses"}>
                      <button id={"heroButton"} style={{background: currentColour}}>
                          Get Started
                      </button>
                  </a>
              </section>
          </ScrollRevealContent>
          <ul className={"carousel content"}>
              <ScrollRevealContent>
                  <div className={"aboutText"} style={{borderColor: currentColour}}>
                      <h2>What is PyCourses</h2>
                      <p>PyCourses is an online programming learning tool that aims to teach individuals the basics
                          of
                          coding in languages such as Python. As university students ourselves, we hope to leverage
                          our
                          own
                          knowledge to build upon this platform and teach more as we go about our own learning
                          journey.</p>
                  </div>
              </ScrollRevealContent>
              <ScrollRevealContent>
                  <div className={"courseText"} style={{borderColor: currentColour}}>
                      <h2>Courses</h2>
                      <p>
                          We offer a variety of courses that explore different programming languages at different
                          skill levels.
                          These courses are developed based on our own experiences and knowledge of the language and
                          are designed to combat issues that we have faced while learning.
                          We've designed lessons that encompass a wide range of topics, from the well known "Hello
                          World" to more complex topics such as recursion and object oriented programming.
                          While we are still in the process of developing these courses, we hope to provide a
                          comprehensive learning experience for everyone.
                      </p>
                  </div>
              </ScrollRevealContent>
              <ScrollRevealContent>
                  <div className={"problemsText"} style={{borderColor: currentColour}}>
                      <h2>Problems</h2>
                      <p>
                          We offer a variety of problems that are designed to test your knowledge of the language
                          and reinforce the concepts that you have learnt. These problems are designed to be
                          challenging and are based on real world problems that we have faced while learning the
                          language.
                          We hope these problems will help you to develop your problem solving skills and improve
                          your understanding of the languages that we teach.
                          While we are still in the process of developing these problems, we hope to provide a
                          comprehensive learning experience for everyone.
                      </p>
                  </div>
              </ScrollRevealContent>
              <ScrollRevealContent>
                  <div className={"ideText"} style={{borderColor: currentColour}}>
                      <h2>Playground</h2>
                      <p>
                          Our IDE is designed to help you write, compile and run code in the browser. We have
                          designed this IDE to be simple and easy to use, so that you can focus on writing code and
                          learning the language. Our IDE supports a variety of languages and is designed to help you
                          learn the basics of programming.
                          While we are still in the process of developing this IDE, we hope to provide a
                          comprehensive learning experience for everyone.
                      </p>
                  </div>
              </ScrollRevealContent>
          </ul>
          <ScrollRevealContent>
              <section className={"contactDirect"}>
                  <h2>If you have any issues or queries, visit the contact page here</h2>
                  <a href={"/contact"}>
                      <button id={"contactButton"} style={{background: currentColour}}>
                          Contact us
                      </button>
                  </a>
              </section>
          </ScrollRevealContent>
          <Footer />
      </div>
    )
}

export default Home
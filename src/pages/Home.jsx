import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import QuoteMachine from "../components/Quote.componentt"
import { useState } from "react"

function Home() {
    const [backgroundColor, setBackgroundColor] = useState(
        'linear-gradient(to right, #ff8a00, #da1b60)'
      );
    
      const changeBackgroundColor = (newColor) => {
        setBackgroundColor(newColor);
      };
  return (
    <div style={{ background: backgroundColor }} className={`all-content ${backgroundColor}`}>
      <Header />
      <QuoteMachine changeBackgroundColor={changeBackgroundColor} />
      <Footer />
    </div>
  )
}

export default Home

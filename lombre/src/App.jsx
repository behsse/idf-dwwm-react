import { ArticleSection } from "./components/articleSection/ArticleSection"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { InfoSection } from "./components/infoSection/InfoSection"
import { Navbar } from "./components/navbar/Navbar"
import { Newsletter } from "./components/newsletter/Newsletter"

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <ArticleSection/>
      <InfoSection/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App

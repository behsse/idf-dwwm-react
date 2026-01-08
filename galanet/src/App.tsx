import { Header } from "./components/header/Header"
import { Navbar } from "./components/navbar/Navbar"
import { Trends } from "./components/trends/Trends"

function App() {

  return (
    <main className="py-3 bg-slate-900 text-sm">
      <div className="w-full max-w-360 mx-auto grid gap-8">
        <Navbar/>
        <Header/>
        <Trends/>
      </div>
    </main>
  )
}

export default App
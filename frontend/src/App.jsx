import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-[72px] lg:pt-[84px]">
        <Home />
        <Menu />
      </main>
    </>
  )
}

export default App
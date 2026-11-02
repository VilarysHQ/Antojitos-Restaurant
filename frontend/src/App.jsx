import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-[72px] lg:pt-[84px]">
        <Home />
      </main>
    </>
  )
}

export default App
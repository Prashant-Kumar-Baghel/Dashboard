import Main from "./Sections/Main"
import Sidebar from "./Sections/Sidebar"

const App = () => {
  return (
    <main className=" w-full flex justify-between items-start h-screen">
      <Sidebar/>
      <Main/>
    </main>
  )
}

export default App

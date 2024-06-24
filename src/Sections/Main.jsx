import Header from "../components/Header"
import LineChart from "../components/LineChart"
import OurChart from "../components/OurChart"
import PieChart from "../components/PieChart"
import RoundNut from "../components/RoundNut"
import Table from "../components/Table"
const Main = () => {
  return (
//     flex-grow ensures that Main takes up the remaining space available in the main container, regardless of the width of Sidebar.
// Without flex-grow, Main would not adjust its size based on the Sidebar's width changes, potentially causing layout issues.
    <section className="w-[80%] grow p-4 h-screen overflow-y-auto">
      <Header/>

      {/* main container start  */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen">

 
         {/* Left Part  */}
        <div id="left" className="col-span-2 p-[18px] h-full flex flex-col gap-[8rem]">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 w-full ">
            <div className="bg-red-500 h-[20vh] flex justify-center items-center w-full rounded-lg text-white">
              Box1
            </div>
            <div className="bg-green-500 h-[20vh] flex justify-center items-center w-full rounded-lg">
              Box2
            </div>
            <div className="bg-blue-700 h-[20vh] flex justify-center items-center w-full rounded-lg">
              Box3
            </div>
          </div>
          <OurChart/>
          <LineChart/>
          <PieChart/>
          <RoundNut/>
          <Table/>
        </div>

        {/* Right Part  */}

        <div className="w-full flex flex-col gap-4 py-4 lg:h-full h-[62vh] ">
          <div className=" bg-black flex item-center justify-center h-1/2 rounded-lg text-white">
            Box1
          </div>
          <div className=" bg-blue-700 flex item-center justify-center h-1/2 rounded-lg">
            Box2
          </div>
        </div>

      </div>
    </section>
  )
}

export default Main

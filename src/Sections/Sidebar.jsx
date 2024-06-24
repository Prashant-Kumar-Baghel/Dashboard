import { motion } from "framer-motion";
import { navItems } from "../utils/mockData";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" }
}
const Sidebar = () => {
  const [isExpended, setIsExpended] = useState(true); //it is for side bar shrinking effect.By default sidebar should be open .
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 756) {
        setIsExpended(false);
      } else {
        setIsExpended(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.section
      variants={variants}
      animate={isExpended ? "expanded" : "nonExpanded"}
      className={"w-1/5 bg-gray-950 h-screen flex flex-col items-center  gap-10 relative" + (isExpended ? " py-8 px-6" : " py-6 px-8")}
    >
      <div >
        {isExpended ? <div >
          <h1 className=" text-red-700 text-3xl font-bold">DEBUG <span className="text-yellow-500 italic">Entity</span></h1>
        </div> : <div className="flex justify-between items-center"> <h1 className="text-red-700 text-3xl font-bold">D</h1><span className="text-yellow-500 italic text-3xl">E</span></div>}

        <div className="flex flex-col items-center gap-[1rem] justify-center w-full mt-[2rem]">
          {navItems.map((item) => <div key={item?.id} className={`flex items-center gap-[1rem] w-full cursor-pointer justify-start ${activeNavIndex == item?.id ? 'bg-yellow-500 rounded-lg' : 'bg-transparent'} ${isExpended ? "lg:px-6 py-2 md:px-2" : "p-2"}`}
            onClick={() => {
              setActiveNavIndex(item?.id)
            }}>
            <div className="bg-yellow-300 rounded-full p-2 text-black">
              <span className="md:w-6 w-4 h-4 md:h-6">{item.icon}</span>
            </div>
            {isExpended ? <span className={(activeNavIndex == item?.id) ? "text-black" : "text-white"} >{item.name}</span> : ""}
          </div>)}
        </div>
      </div>



      <div className="bg-yellow-500 text-black rounded-full p-2 absolute right-[-0.9rem] top-[72%] hidden md:block cursor-pointer" onClick={() => {
        setIsExpended(!isExpended);
      }}>
        <FaArrowRight />
      </div>

      <div className="flex flex-col gap-4 w-full absolute bottom-4">
        <div className="bg-slate-700 w-full h-[0.5px]"></div>
        <div className="flex items-center gap-2 justify-center">
          <div className="text-white text-[1.5rem]">
          <MdLogout/>
          </div>
          <span className={`text-xl text-white ${isExpended?'block':"hidden"}`}>LogOut</span>
        </div>
      </div>
    </motion.section>
  )
};

export default Sidebar;

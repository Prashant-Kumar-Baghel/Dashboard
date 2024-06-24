import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import client from "../assets/images/client.jpg"
const Header = () => {
  return (
    <section className="bg-[#F1F5F9] h-[21vh] lg:h-[14vh] flex flex-col lg:flex-row justify-between rounded-lg py-4 px-2 items-center w-[100%]">
      <span className="text-black font-bold text-2xl">Overview</span>
        <div className="flex items-center justify-end gap-2">
        <div className="font-bold text-[1.5rem]">
        <CiSearch />
        </div>
          <img className="w-[21%] rounded-full ml-[4vw] h-[9vh]" src={client} alt="" />
          <div >
            <div className="flex gap-1 items-center">
              <span className="font-bold">Hi, Jack</span>
              <IoIosArrowDown />
            </div>
            <span>Admin</span>
          </div>
        </div>
    </section>
  )
}

export default Header

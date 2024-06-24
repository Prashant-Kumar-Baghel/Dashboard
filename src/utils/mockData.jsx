import { IoSettingsSharp } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { MdDashboard,  MdOutlineMessage } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";

export const navItems=[
    {
        id:"0",
        name:"Dashboard",
        icon:<MdDashboard/>
    },
    {
        id:"1",
        name:"Analytics",
        icon:<SiSimpleanalytics/>
    },
    {
        id:"2",
        name:"Message",
        icon:<MdOutlineMessage/>
    },
    { 
        id:"3",
        name:"Tools",
        icon:<LiaToolsSolid/>
    },
    {
        id:"4",
        name:"Setting",
        icon:<IoSettingsSharp/>
    }
]

export const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Overall Turnover',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const barData = {
    labels,
    datasets: [
      {
        label: 'Average',
        data: [1000,3000,5000,7000,9000,6000,4000],
        backgroundColor: 'red',
        // barThickness: 5, // Optional: Set bar thickness
      
      },
      {
        label: 'Report Data',
        data: [3000,1000,4000,9000,2000,8000,5000],
        backgroundColor: 'black',
        // barThickness: 5, // Optional: Set bar thickness
        
      }
    ],
  };
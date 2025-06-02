import poisk from "../../assets/poisk.png";
import "./NavTop.css";
import { useState } from "react";
import {NavLink, Link} from "react-router-dom"


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [inputNav, setInpNav] = useState(false);
  function openNav() {
    setOpen(!open);
  }

  function openInput() {
    setInpNav(!inputNav);
  }


  

  const Links = [
    { name: "Новости мира", link: "/world" }, 
    { name: "Экономика", link: "/economic" },
    { name: "Крипта валюты", link: "/cript" },
    { name: "Политика", link: "/politics" },
    { name: "Бизнес", link: "/bussinis" },
    { name: "Технолгии", link: "/texnology" },
  ];

  return (
    <>
      <header className="bg-slate-600 h-16">
        <nav>
          <div className="bg-gray-800 justify-between items-center flex  w-full h-16 xl:px-24 sm:px-12 px-10 ">
            <div className="max-w-[1140px] justify-between items-center flex w-full mx-auto">
              <div className="text-white flex justify-between items-center ">
                <button
                  className={`lg:hidden block Menu-News`}
                  onClick={openNav}
                >
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </button>
                <h3 className="lg:text-4xl md:text-3xl sm:text-2xl font-imbue">
                  <Link to="/">The Journal</Link>
                </h3>
              </div>
              <div className="text-white flex justify-between items-center ">
                <h3 className="lg:text-4xl md:text-3xl sm:text-2xl font-imbue mx-5">
                  <a href="#">Sing In</a>
                </h3>
                <h3 className="lg:text-4xl md:text-3xl sm:text-2xl  bg-white text-gray-900 rounded-xl px-3 font-imbue ">
                  <a href="#">Subscribe</a>
                </h3>

                <button onClick={openInput} className="poisk w-4 h-4  ml-2 ">
                  <img src={poisk} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${
              inputNav ? "flex" : "hidden"
            } w-full bg-gray-600 h-[88px]  relative z-10`}
          >
            <input
              type="text"
              className="w-[80%] mx-auto mt-[22px]   h-10 rounded-md bg-slate-200 outline-none text-gray-950"
              placeholder="Search The Journal"
            />
          </div>
        </nav>
      </header>

      <nav className="w-full bg-gray-500 ">
        <div className="md:flex w-full max-w-[1140px] mx-auto justify-between items-center text-white hidden py-8 ">
          {Links.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold "
                  : "text-grey-700 hover:text-black"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Phone */}
        <div className={`${open ? "block" : "hidden"}`}>
          <div className="flex items-center">
            <div className=" ml-5 p-3 text-red-600 flex justify-between items-center">
              <div className="w-4 h-4 bg-red-700 rounded-full "></div> LIVE
            </div>
            <div>
              <input
                className="p-2 w-[100%] outline-none rounded-xl placeholder:text-gray-900 "
                type="text"
                placeholder="Search The Journal"
              />
            </div>
          </div>
          <div className="block text-center py-4 bg-slate-400 border-b-2 border-white">
            <div className=""></div>
            {Links.map((link) => (
              <NavLink
                key={link.name}
                to={link.link}
                className="block text-center py-4 bg-slate-400 border-b-2 border-white"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

// }
//   // Mobile Nav
//   const openNav = () => {
//     setOpen(!open);
//   };
//   // PC input nav
//   const openInputNav = () =>{
//       setInpNav(!inputNav)
//   }

//   return (
//     <>
//       <NavBarLogo openNav={openNav} inputNav={inputNav} openInputNav={openInputNav} />
//       <NavCenter open={open} />
//     </>
//   );

// }

// function NavBarLogo({ openNav , inputNav , openInputNav}) {
//   return (
//     <>

//     </>
//   );
// }

// function NavCenter({ open }) {
//   return (
//     <>
//       <div className="NavDispaly h-16 w-full bg-gray-700 ">
//         <ul className="flex justify-between items-center pt-3 px-5 max-w-[1140px]  w-full mx-auto">
//           <li className="Nav-Center">
//             <a href="#" className="flex justify-center items-center ">
//               <div className=" mr-1 h-4 w-4 bg-red-700 rounded-full"></div>
//               <span className="text-red-700">LIVE</span>
//             </a>
//           </li>
//           <li className="Nav-Center">
//             <a href="#">Новости мира</a>
//           </li>
//           <li className="Nav-Center">
//             <a href="#">Экономика</a>
//           </li>
//           <li className="Nav-Center">
//             <a href="#">Крипта валюты</a>
//           </li>
//           <li className="Nav-Center">
//             <a href="#">Политика</a>
//           </li>
//           <li className="Nav-Center">
//             <a href="#">Бизнес</a>
//           </li>
//           <li className="Nav-Center">
//             <a href="#">Стартаппы</a>
//           </li>

//         </ul>
//       </div>

//       {/* MOBILE */}

//       <div className={`${open ? "block" : "hidden"} NoneDspNav`}>
//         <ul>
//           <div className="flex justify-between items-center bg-gray-700" >
//             <div className="flex justify-center items-center px-5">
//               {" "}
//               <div className="w-4 h-4 rounded-full bg-red-800  justify-between items-center"></div>
//               <span className="text-red-800">LIVE</span>
//             </div>
//             <input
//               type="text"
//               placeholder="Найдите новость"
//               className="outline-none pl-2 w-full  py-2 bg-gray-400 duration-700 transition-color ease-in-out border-gray-800 placeholder:text-gray-950 focus:border-gray-800 "
//             />
//           </div>

//           <li className="Nav-none-Dspl">
//             <a href="#">Новости мира</a>
//           </li>
//           <li className="Nav-none-Dspl">
//             <a href="#">Экономика</a>
//           </li>
//           <li className="Nav-none-Dspl">
//             <a href="#">Крипта валюты</a>
//           </li>
//           <li className="Nav-none-Dspl">
//             <a href="#">Политика</a>
//           </li>
//           <li className="Nav-none-Dspl">
//             <a href="#">Бизнес</a>
//           </li>
//           <li className="Nav-none-Dspl">
//             <a href="#">Стартаппы</a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

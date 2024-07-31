// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const {currentUser} = useContext(AuthContext);
  

//   return (
//     <>
//       <nav className="flex justify-between items-center h-[100px]">
//         <div className="flex items-center w-[60%]">
//           <Link
//             className="flex gap-2 text-[20px] transition-all duration-400 ease-in-out hover:scale-105"
//             to="/"
//           >
//             <img className="flex w-[28px]" src="/logo.png" alt="" />
//             <span className="flex font-bold">Real Estate</span>
//           </Link>
//           <div className="flex items-center gap-[50px]">
//             <span className="font-bold"></span>
//             <div className="flex gap-5">
//               <Link
//                 className="transition-all duration-400 ease-in-out hover:scale-105"
//                 to="/"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="transition-all duration-400 ease-in-out hover:scale-105"
//                 to="/about"
//               >
//                 About
//               </Link>
//               <Link
//                 className="transition-all duration-400 ease-in-out hover:scale-105"
//                 to="/contact"
//               >
//                 Contact
//               </Link>
//               <Link
//                 className="transition-all duration-400 ease-in-out hover:scale-105"
//                 to="/agents"
//               >
//                 Agents
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="flex w-[40%] items-center justify-end bg-[#fcf5f3] h-full">
//           {currentUser ? (
//             <>
//               <div className="py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105 flex items-center gap-2">
//                 <img
//                   className="w-10 h-10 rounded-full object-cover"
//                   src={currentUser.avatar || "/noAvatar.png"}
//                   alt=""
//                 />
//                 <span>{currentUser.username}</span>
//               </div>
//               <Link
//                 className="bg-yellow-400 py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105 relative"
//                 to="/ProfilePage"
//               >
//                 Profile
//                 <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   3
//                 </span>
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 className="py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105"
//                 to="/login"
//               >
//                 Sign in
//               </Link>
//               <Link
//                 className="bg-yellow-400 py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105"
//                 to="/register"
//               >
//                 Sign up
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;



// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="relative">
//       <div className="flex justify-between items-center h-16 px-4 lg:h-[100px]">
//         <Link
//           className="flex gap-2 text-xl lg:text-[20px] transition-all duration-400 ease-in-out hover:scale-105"
//           to="/"
//         >
//           <img className="w-6 lg:w-[28px]" src="/logo.png" alt="" />
//           <span className="font-bold">Real Estate</span>
//         </Link>
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl block lg:hidden">
//           ☰
//         </button>
//         <div className="hidden lg:flex lg:items-center lg:gap-[50px]">
//           <NavLinks />
//         </div>
//         <div className="hidden lg:flex lg:w-[40%] lg:items-center lg:justify-end lg:bg-[#fcf5f3] lg:h-full">
//           <AuthButtons currentUser={currentUser} />
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden">
//           <NavLinks />
//           <AuthButtons currentUser={currentUser} />
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLinks = () => (
//   <div className="flex flex-col lg:flex-row lg:gap-5 items-center">
//     {['Home', 'About', 'Contact', 'Agents'].map((item) => (
//       <Link
//         key={item}
//         className="p-2 lg:p-0 transition-all duration-400 ease-in-out hover:scale-105"
//         to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//       >
//         {item}
//       </Link>
//     ))}
//   </div>
// );

// const AuthButtons = ({ currentUser }) => (
//   <div className="flex  justify-between lg:flex-row">
//     {currentUser ? (
//       <>
//         <div className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 flex items-center gap-2">
//           <img
//             className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
//             src={currentUser.avatar || "/noAvatar.png"}
//             alt=""
//           />
//           <span>{currentUser.username}</span>
//         </div>
//         <Link
//           className="bg-yellow-400  px-4 m-2  lg:px-[10px]  lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 relative"
//           to="/ProfilePage"
//         >
//           Profile
//           <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//             3
//           </span>
//         </Link>
//       </>
//     ) : (
//       <>
//         <Link
//           className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
//           to="/login"
//         >
//           Sign in
//         </Link>
//         <Link
//           className="bg-yellow-400 py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
//           to="/register"
//         >
//           Sign up
//         </Link>
//       </>
//     )}
//   </div>
// );

// export default Navbar;



// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const { currentUser } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="relative z-50">
//       <div className="flex justify-between items-center h-16 px-4 lg:h-[100px] lg:pr-0">
//         <div className="flex items-center lg:w-[60%]">
//           <Link
//             className="flex gap-2 text-xl lg:text-[20px] transition-all duration-400 ease-in-out hover:scale-105"
//             to="/"
//           >
//             <img className="w-6 lg:w-[28px]" src="/logo.png" alt="" />
//             <span className="font-bold">Real Estate</span>
//           </Link>
//           <div className="hidden lg:flex lg:items-center lg:ml-auto lg:mr-8">
//             <NavLinks />
//           </div>
//         </div>
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-2xl block lg:hidden"
//         >
//           ☰
//         </button>
//         <div className="hidden lg:flex lg:w-[40%] lg:items-center lg:justify-end lg:bg-[#fcf5f3] lg:h-full lg:absolute lg:right-0">
//           <AuthButtons currentUser={currentUser} />
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden ">
//           <NavLinks />
//           <AuthButtons currentUser={currentUser} />
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLinks = () => (
//   <div className="flex flex-col lg:flex-row lg:gap-5 items-center">
//     {['Home', 'About', 'Contact', 'Agents'].map((item) => (
//       <Link
//         key={item}
//         className="p-2 lg:p-0 transition-all duration-400 ease-in-out hover:scale-105"
//         to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//       >
//         {item}
//       </Link>
//     ))}
//   </div>
// );

// const AuthButtons = ({ currentUser }) => (
//   <div className="flex justify-between lg:flex-row">
//     {currentUser ? (
//       <>
//         <div className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 flex items-center gap-2">
//           <img
//             className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
//             src={currentUser.avatar || "/noAvatar.png"}
//             alt=""
//           />
//           <span>{currentUser.username}</span>
//         </div>
//         <Link
//           className="bg-yellow-400 py-2 px-4 m-2 lg:p-[10px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 relative flex items-center justify-center"
//           to="/ProfilePage"
//         >
//           <span className="text-center">Profile</span>
//           <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//             3
//           </span>
//         </Link>
//       </>
//     ) : (
//       <>
//         <Link
//           className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
//           to="/login"
//         >
//           Sign in
//         </Link>
//         <Link
//           className="bg-yellow-400 py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
//           to="/register"
//         >
//           Sign up
//         </Link>
//       </>
//     )}
//   </div>
// );

// export default Navbar;


import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center h-16 px-4 lg:h-[100px] lg:pr-0 bg-white">
        <div className="flex items-center lg:w-[60%]">
          <Link
            className="flex gap-2 text-xl lg:text-[20px] transition-all duration-400 ease-in-out hover:scale-105"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <img className="w-6 lg:w-[28px]" src="/logo.png" alt="" />
            <span className="font-bold">Real Estate</span>
          </Link>
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:mr-8">
            <NavLinks handleNavigation={handleNavigation} />
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="text-2xl block lg:hidden"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <div className="hidden lg:flex lg:w-[40%] lg:items-center lg:justify-end lg:bg-[#fcf5f3] lg:h-full lg:absolute lg:right-0">
          <AuthButtons currentUser={currentUser} handleNavigation={handleNavigation} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-50">
          <NavLinks handleNavigation={handleNavigation} />
          <AuthButtons currentUser={currentUser} handleNavigation={handleNavigation} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ handleNavigation }) => (
  <div className="flex flex-col lg:flex-row lg:gap-5 items-center">
    {['Home', 'About', 'Contact', 'Agents'].map((item) => (
      <Link
        key={item}
        className="p-2 lg:p-0 transition-all duration-400 ease-in-out hover:scale-105"
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        onClick={() => handleNavigation(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
      >
        {item}
      </Link>
    ))}
  </div>
);

const AuthButtons = ({ currentUser, handleNavigation }) => (
  <div className="flex justify-between lg:flex-row">
    {currentUser ? (
      <>
        <div className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 flex items-center gap-2">
          <img
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
            src={currentUser.avatar || "/noAvatar.png"}
            alt=""
          />
          <span>{currentUser.username}</span>
        </div>
        <Link
          className="bg-yellow-400 py-2 px-4 m-2 lg:p-[10px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105 relative flex items-center justify-center"
          to="/ProfilePage"
          onClick={() => handleNavigation('/ProfilePage')}
        >
          <span className="text-center">Profile</span>
          <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </Link>
      </>
    ) : (
      <>
        <Link
          className="py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
          to="/login"
          onClick={() => handleNavigation('/login')}
        >
          Sign in
        </Link>
        <Link
          className="bg-yellow-400 py-2 px-4 m-2 lg:py-[6px] lg:px-[20px] lg:m-5 transition-all duration-400 ease-in-out hover:scale-105"
          to="/register"
          onClick={() => handleNavigation('/register')}
        >
          Sign up
        </Link>
      </>
    )}
  </div>
);

export default Navbar;
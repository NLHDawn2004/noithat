// import React, { useState } from "react";
// import { IoSettingsOutline } from "react-icons/io5";
// import { BsBagCheck } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
// import { GrHelp } from "react-icons/gr";
// import { BiLogOut } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { authActions } from "./authSlice";
// import LoginForm from "../Pages/LognInElements/LognInForm";

// const User = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (email, password) => {
//     // Perform login logic here
//     // For simplicity, let's assume the login is successful
//     setIsLoggedIn(true);
//   };

//   const dispatch = useDispatch();
//   const logoutHandler = () => {
//     dispatch(authActions.logout());
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="profile">
//       {isLoggedIn ? (
//         <>
//           <button className="img" onClick={() => setIsLoggedIn(false)}>
//             <img src="https://i.pinimg.com/564x/af/17/c5/af17c537532d7b9339b39c2e20341aa6.jpg" alt="" />
//           </button>

//           <div className="openProfile boxItems">
//             <div className="image">
//               <Link to="/account">
//                 <div className="img">
//                   <img
//                     src="https://i.pinimg.com/564x/af/17/c5/af17c537532d7b9339b39c2e20341aa6.jpg"
//                     alt=""
//                   />
//                 </div>
//               </Link>
//               <div className="text">
//                 <h4>Thạch Hạo</h4>
//                 <label htmlFor="">Hoang Thiên Đế</label>
//               </div>
//             </div>
//             <Link to="/login">
//               <button className="box">
//                 <IoSettingsOutline className="icon" />
//                 <h4>Tài khoản của tôi</h4>
//               </button>
//             </Link>
//             <button className="box">
//               <BsBagCheck className="icon" />
//               <h4>Giỏ hàng</h4>
//             </button>
//             <button className="box">
//               <AiOutlineHeart className="icon" />
//               <h4>Danh sách yêu thích</h4>
//             </button>
//             <button className="box">
//               <GrHelp className="icon" />
//               <h4>Điều muốn biết</h4>
//             </button>
//             <button className="box" onClick={logoutHandler}>
//               <BiLogOut className="icon" />
//               <h4>Đăng xuất</h4>
//             </button>
//           </div>
//         </>
//       ) : (
//         <LoginForm handleLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default User;